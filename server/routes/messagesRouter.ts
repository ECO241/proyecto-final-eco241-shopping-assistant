import express from 'express'
import { messagesController } from '../controllers/messagesController'

export const messagesRouter = express.Router()

messagesRouter.get('/', messagesController.getAllMessages)

messagesRouter.get('/:id', messagesController.getMessageById)

messagesRouter.post('/', )