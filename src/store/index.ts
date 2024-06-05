import { ScreensTypes } from "../types/screens";
import { Action, AppState, Observer } from "../types/store";
import { randomString } from "../utilities/randomString";
import { reducer } from "./reducer";

const observers: Observer[] = [];

export let state: AppState = {
    screen: ScreensTypes.buyerRecommendedPage,
    insideUser: undefined,
    outsideUser: undefined,
    sessionClothes: [],
    userId: randomString(10),
    roomId: undefined
};

export const dispatch = (action: Action) => {
    const clone = JSON.parse(JSON.stringify(state));
    state = reducer(action, clone);
    if (action.reload === true) {
        observers.forEach((o) => o.render());
    }
    console.log(state)
};

export const addObserver = (observer: Observer) => {
    observers.push(observer);
};
