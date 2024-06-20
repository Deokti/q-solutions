import { createEvent, createStore } from "effector";

export const $isClosedMenu = createStore<boolean>(false);
export const $isHamburgerActive = createStore<boolean>(false);

export const handleClosedMenu = createEvent();
export const handleHamburgerActivated = createEvent();

$isClosedMenu.on(handleClosedMenu, (currentState) => !currentState);
$isHamburgerActive.on(handleHamburgerActivated, (currentState) => !currentState);
