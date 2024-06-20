import { UnmappedRouteObject, createRoute } from "atomic-router";

export const ROUTES = {
  HOME: createRoute(),
  NOT_FOUND: createRoute(),
  VIRTUAL_LIST: createRoute(),
};

export const routesConfig: UnmappedRouteObject<object>[] = [
  { path: "/", route: ROUTES.HOME },
  { path: "/projects/virtual-list", route: ROUTES.VIRTUAL_LIST },
];
