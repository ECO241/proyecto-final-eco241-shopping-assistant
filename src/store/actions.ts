import { Action, Actions } from "../types/store";

export const changeScreen = (payload: string, reload: boolean): Action => ({
  type: Actions.CHANGE_SCREEN,
  payload,
  reload
});

export const updateRoomId = (payload: string | undefined, reload: boolean): Action => ({
  type: Actions.UPDATE_ROOM_ID,
  payload,
  reload
});

export const updateUserId = (payload: string, reload: boolean): Action => ({
  type: Actions.UPDATE_USER_ID,
  payload,
  reload
});

export const updateOutsideUserId = (payload: string, reload: boolean): Action => ({
  type: Actions.UPDATE_OUTSIDE_USER_ID,
  payload,
  reload
});

export const updateInsideUserId = (payload: string, reload: boolean): Action => ({
  type: Actions.UPDATE_INSIDE_USER_ID,
  payload,
  reload
});
