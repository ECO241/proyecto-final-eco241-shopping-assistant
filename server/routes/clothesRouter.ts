import express from 'express'
import { clothesControllers } from '../controllers/clothesController'

export const clothesRouter = express.Router()

clothesRouter.get('/', clothesControllers.getAllClothes)

clothesRouter.get('/:id', clothesControllers.getClotheById)