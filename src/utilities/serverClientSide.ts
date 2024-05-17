import { io } from "socket.io-client"; //Importamos el socket cliente
import { changeScreen, updateInsideUserId, updateOutsideUserId, updateRoomId, updateUserId } from "../store/actions";
import { ScreensTypes } from "../types/screens";
import { dispatch } from "../store";

export const socket = io("http://localhost:5500")  //Es un objeto que nos permite usar algunas funcionalidades de socket, se relaciona entre el cliente y el servidor.

interface responseRoomData {
    roomId?: string,
    conection: string,
    message: string
}

//Eventos de socket => Son los que provienen del servidor al cliente

socket.on('Socket Id', (socketId: string) => {
    dispatch(
        updateUserId(socketId, false)
    )
})

socket.on('responseRoom', (data: string) => {
    const responseRoomJSON: responseRoomData = JSON.parse(data)
    console.log(responseRoomJSON)
    if (responseRoomJSON.conection === "avilable") {
        dispatch(
            updateRoomId(responseRoomJSON.roomId, false)
        )
        dispatch(
            changeScreen(ScreensTypes.whoAreYouPage, true)
        )
    } else {
        alert("Room code invalid")
    }
})

socket.on('updateRoomConnectionResponse', (data) => {
    if (data.message === "Error on data type's") {
        alert("Error on types")
    }
})

socket.on('privado', async (data: string) => {
    const dataJson = await JSON.parse(data)

    if (dataJson.target === socket.id) {
        switch (dataJson.type) {
            case "updateOutsideUser":
                dispatch(
                    updateOutsideUserId(dataJson.message, false)
                )
                dispatch(
                    changeScreen(ScreensTypes.dressingRoomPage, true)
                )
                break;
            case "updateInsideUser":
                dispatch(
                    updateInsideUserId(dataJson.message, false)
                )
                dispatch(
                    changeScreen(ScreensTypes.dressingRoomPage, true)
                )
                break;

            default:
                break;
        }
    }
})

