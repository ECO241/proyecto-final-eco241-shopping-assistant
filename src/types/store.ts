import { ScreensTypes } from "./screens";

export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: any,
  reload: boolean
}

export enum Actions {
  "CHANGE_SCREEN" = "CHANGE_SCREEN",
  "UPDATE_ROOM_ID" = "UPDATE_ROOM_ID",
  "UPDATE_USER_ID" = "UPDATE_USER_ID",
  "UPDATE_OUTSIDE_USER_ID" = "UPDATE_OTHER_USER_ID",
  "UPDATE_INSIDE_USER_ID" = "UPDATE_INHER_USER_ID",
  "UPDATE_ROOM_DATA" = "UPDATE_ROOM_DATA"
}

export interface AppState {
  screen: ScreensTypes
  insideUser: string | undefined
  outsideUser: string | undefined
  sessionClothes: Array<clothes>,
  userId: string | undefined,
  roomId: undefined | string,
  roomName: undefined | string
  sessionCart: Array<number>
}

interface user {
  id: string,
  name: string
}

interface clothes {
  name: string,
  id: string,
  image: string
}