import { createEvent, createStore } from "effector";

export const $isClosedMenu = createStore<boolean>(false);

export const handleClosedMenu = createEvent();

$isClosedMenu.on(handleClosedMenu, (currentState) => !currentState);
