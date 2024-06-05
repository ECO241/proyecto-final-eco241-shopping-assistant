import { Request, Response } from "express";
import { messageService } from "../services/messagesService";

export const messagesController = {
    getAllMessages: async (req: Request, res: Response) => {
        try {
            const data = await messageService.getAllMessagesSupabase()
            res.json(data)
        } catch (error: any) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    getMessageById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const data = await messageService.getMessageByIdSupabase(parseInt(id))
            res.json(data)
        } catch (error: any) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    postMessage: async (req: Request, res: Response) => {
        try {
            const body = req.body
            await messageService.postMessageSupabase(body)
            res.send("message posted successfully")
        } catch (error: any) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    }

}