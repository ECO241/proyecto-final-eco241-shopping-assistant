import { ScreensTypes } from "../types/screens";
import { Action, Actions, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
  switch (action.type) {
    case Actions.CHANGE_SCREEN:
      return {
        ...currentState,
        screen: action.payload
      };
    case Actions.UPDATE_ROOM_ID:
      return {
        ...currentState,
        roomId: action.payload
      };
    case Actions.UPDATE_USER_ID:
      return {
        ...currentState,
        userId: action.payload
      };
    case Actions.UPDATE_OUTSIDE_USER_ID:
      return {
        ...currentState,
        outsideUser: action.payload
      };
    case Actions.UPDATE_INSIDE_USER_ID:
      return {
        ...currentState,
        insideUser: action.payload
      };
    case Actions.UPDATE_ROOM_DATA:
      return {
        ...currentState,
        roomId: action.payload.id,
        insideUser: action.payload.insideUserCode,
        roomName: action.payload.name,
        outsideUser: action.payload.outsideUserCode
      };
    default:
      return currentState;
  }
};
