import { Request, Response } from 'express'
import { clothesServices } from '../services/clothesService'

export const clothesControllers = {
    getAllClothes: async (req: Request, res: Response) => {
        try {
            const clothes = await clothesServices.getAllClothesSupabase()
            res.json({ success: true, clothes })
        } catch (error) {
            console.error("Error retrieving data from Supabase:", error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    getClotheById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const clothesById = await clothesServices.getClotheByIdSupabase(parseInt(id))
            res.json({ success: true, clothesById })
        } catch (error) {
            console.error("Error retrieving data from Supabase:", error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    }
}