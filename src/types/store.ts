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
  "UPDATE_USER_ID" = "UPDATE_USER_ID"
}

export interface AppState {
  screen: ScreensTypes
  insideUser: user | undefined
  outsideUser: user | undefined
  sessionClothes: Array<clothes>,
  userId: string | undefined,
  roomId: undefined | string
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