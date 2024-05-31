import jsQR from "jsqr";
import { dispatch } from "../store";
import { changeScreen, updateRoomId } from "../store/actions";
import { ScreensTypes } from "../types/screens";

export function encenderCamara(HTMLVideoElement: HTMLVideoElement, HTMLCanvasElement: HTMLCanvasElement) {
    console.log("encenderCamara")
    navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((stream) => {
            console.log("Hola")
            HTMLVideoElement.playsInline = true
            HTMLVideoElement.srcObject = stream
            HTMLVideoElement.play()

            tick(HTMLVideoElement, HTMLCanvasElement)
        })
}

function tick(HTMLVideoElement: HTMLVideoElement, HTMLCanvasElement: HTMLCanvasElement) {
    const canvas = HTMLCanvasElement.getContext("2d");

    HTMLCanvasElement.height = HTMLVideoElement.videoHeight;
    HTMLCanvasElement.width = HTMLVideoElement.videoWidth;

    let scaned: boolean = false

    if (HTMLCanvasElement.height !== 0) {
        if (canvas) {
            canvas.drawImage(HTMLVideoElement, 0, 0, HTMLCanvasElement.width, HTMLCanvasElement.height)

            const imageData = canvas.getImageData(0, 0, HTMLCanvasElement.width, HTMLCanvasElement.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: "dontInvert",
            });
            if (code) {
                scaned = true
                console.log(`Codigo escaneado: ${code.data}`)
                alert(`Ingresando al probador ${code.data}`)
                goToWaitingRoom(code.data)

                setTimeout(() => { tick(HTMLVideoElement, HTMLCanvasElement) }, 1000)
            }
        }
    }

    if (!scaned) {
        requestAnimationFrame(() => { tick(HTMLVideoElement, HTMLCanvasElement) })
    }
}

async function goToWaitingRoom(code: string) {
    const response = await fetch(`http://localhost:5500/rooms/${code}`)
    const roomData = await response.json()
    console.log(roomData)
    if (roomData.data !== null) {
        dispatch(
            updateRoomId(code, false)
        )
        dispatch(
            changeScreen(ScreensTypes.whoAreYouPage, true)
        )
    } else {
        alert("Esta habitación no existe")
    }
}