import { createHistoryRouter, createRouterControls } from "atomic-router";

import { sample } from "effector";
import { createBrowserHistory } from "history";
import { appStarted } from "@/shared/init";
import { ROUTES, routesConfig } from "./route";

export { ROUTES } from "./route";

// Позволяет получать query и другие параметры из любого места
export const controls = createRouterControls();

export const routes = createHistoryRouter({
  routes: routesConfig,
  controls,
  notFoundRoute: ROUTES.NOT_FOUND,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: routes.setHistory,
});
