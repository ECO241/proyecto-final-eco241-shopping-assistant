import { dispatch, state } from "../store"
import { updateRoomData } from "../store/actions"

export async function getRoomData() {
    const roomData = await fetch(`http://localhost:5500/rooms/${state.roomId}`)
    const roomDataJson = await roomData.json()
    console.log(roomDataJson.data[0])
    dispatch(
        updateRoomData(roomDataJson.data[0], false)
    )
}