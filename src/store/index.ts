import { ScreensTypes } from "../types/screens";
import { Action, AppState, Observer } from "../types/store";
import { randomString } from "../utilities/randomString";
import { reducer } from "./reducer";

export const observers: Observer[] = [];

export let state: AppState = {
    screen: ScreensTypes.landingPage,
    insideUser: undefined,
    outsideUser: undefined,
    sessionClothes: [],
    userId: undefined,
    roomId: undefined,
    roomName: undefined,
    sessionCart: [],
    busquedaAddCart: ""
};

export const dispatch = (action: Action) => {
    const clone = JSON.parse(JSON.stringify(state));
    state = reducer(action, clone);
    if (action.reload === true) {
        observers.forEach((o) => o.render());
    }
    console.log("AppState")
    console.log(state)
};

export const addObserver = (observer: Observer) => {
    observers.push(observer);
};
