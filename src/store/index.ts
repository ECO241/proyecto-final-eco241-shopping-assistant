import { ScreensTypes } from "../types/screens";
import { Action, AppState, Observer } from "../types/store";
import { randomString } from "../utilities/randomString";
import { reducer } from "./reducer";

const observers: Observer[] = [];

export let state: AppState = {
    screen: ScreensTypes.addToCartPage,
    insideUser: "m-_RNlHDyNNXDDODAAAB",
    outsideUser: undefined,
    sessionClothes: [],
    userId: "m-_RNlHDyNNXDDODAAAB",
    roomId: "aaaaaa",
    roomName: undefined,
    sessionCart: []
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
