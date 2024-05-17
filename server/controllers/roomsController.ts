import { roomsService } from "../services/roomsService";
import { Request, Response } from 'express'
import { globalSocket, io } from "../socket/socket";


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
            console.log(id)
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
            console.log("Inside User Code: ", insideUserCode)
            console.log(id)
            const roomNewData = await roomsService.updateInsideUserCode(id, insideUserCode)

            globalSocket?.emit('privado', JSON.stringify({
                target: insideUserCode,
                message: "Esto es un mensaje privado"
            }))

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

            globalSocket?.emit('privado', JSON.stringify({
                target: outsideUserCode,
                message: "Esto es un mensaje privado"
            }))

            res.json(roomNewData)
        } catch (error: any) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    }
}