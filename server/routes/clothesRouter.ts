import express from 'express'
import { clothesControllers } from '../controllers/clothesController'

export const clothesRouter = express.Router()

clothesRouter.get('/', clothesControllers.getAllClothes)

clothesRouter.get('/clothe/:id', clothesControllers.getClotheById)

clothesRouter.get('/popular', clothesControllers.getClotheByPopularity)