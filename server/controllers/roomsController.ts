import { roomsService } from "../services/roomsService";
import { Request, Response } from 'express'
import { globalSocket, io } from "../socket/socket";
import { roomType } from "../types/roomType";


export const roomsController = {
    getAllRooms: async (req: Request, res: Response) => {
        try {
            const data = await roomsService.getAllRooms()
            res.json({ success: true, data })
        } catch (error: any) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    getRoomById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const data = await roomsService.getRoomById(id)
            res.json({ success: true, data })
        } catch (error: any) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    updateInsideUserCode: async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const insideUserCode = req.body.insideUserCode

            const roomNewData = await roomsService.updateInsideUserCode(id, insideUserCode)
            const outsideUserCode = roomNewData.outsideUserCode

            console.log(`Outside User Code = ${outsideUserCode}`)
            if (outsideUserCode !== "") {
                globalSocket?.emit('privado', JSON.stringify({
                    target: outsideUserCode,
                    message: roomNewData.outsideUserCode,
                    type: "updateOutsideUser"
                }))
            }



            res.json(roomNewData)
        } catch (error: any) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    updateOutsideUserCode: async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const outsideUserCode = req.body.outsideUserCode
            console.log(outsideUserCode)
            const roomNewData = await roomsService.updateOutsideUserCode(id, outsideUserCode)

            const insideUserCode = roomNewData.insideUserCode

            console.log(`Inside User Code = ${insideUserCode}`)
            if (insideUserCode !== "") {
                globalSocket?.emit('privado', JSON.stringify({
                    target: insideUserCode,
                    message: roomNewData.insideUserCode,
                    type: "updateInsideUser"
                }))
                io.emit('changeToDressingRoom', 'message')
            }

            res.json(roomNewData)
        } catch (error: any) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    }
}