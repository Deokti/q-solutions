import { createRoutesView } from "atomic-router-react";

import { HomePageRoute } from "./home-page";
import { VirtualListPageRoute } from "./virtual-list-page";

export const RoutesView = createRoutesView({
  routes: [HomePageRoute, VirtualListPageRoute],
});
