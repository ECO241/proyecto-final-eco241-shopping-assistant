// import { Socket } from "socket.io" //Instalando la libreria "@types/socket.io" y "@types/socket.io-client" podemos obtener los tipos de socket
import { Request, Response } from "express" //Instalando la libreria "@types/express" podemos obtener los tipos de express
// import { z } from "zod" //Importamos zod para usarlo

import { roomsRouter } from "./routes/rooms"
import { httpServer } from "./socket/socket"

//Nota de TypeScript
//Para usar nodemon con typeScript tenemos que istalar esta version de nodemon: npm install --save-dev ts-node nodemon

const express = require('express') // Importo express
// const http = require('http') //Importo htpp
// const socketIO = require('socket.io') //Importo socket
const cors = require('cors') //Importo cors

export const app = express() //Creo el servidor de express

app.use(cors()) //Le indico que el servidor use cors

app.use(express.json()) //Le indico que el servidor use el midleware de express json para que me maneje las pareadas

//Endpoints de Express

app.get('/', (req: Request, res: Response) => {
    res.send("Prueba")
})

app.use('/rooms', roomsRouter)