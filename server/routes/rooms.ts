import { roomsController } from '../controllers/roomsController'
import express from 'express'
export const roomsRouter = express.Router()

roomsRouter.get('/', roomsController.getAllRooms)

roomsRouter.get('/:id', roomsController.getRoomById)

roomsRouter.patch('/:id/insideUser/', roomsController.updateInsideUserCode)

roomsRouter.patch('/:id/outsideUser/', roomsController.updateOutsideUserCode)

roomsRouter.patch('/:roomId/clothes/:id', roomsController.addClothesToCart)

roomsRouter.patch('/:roomId/clothes/:id/delete', roomsController.deleteClothesToCart)
