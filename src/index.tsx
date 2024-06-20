import { RouterProvider } from "atomic-router-react";
import { allSettled, fork } from "effector";
import { Provider } from "effector-react";
import ReactDOM from "react-dom/client";

import App from "@/app/App";

import { appStarted } from "@/shared/init";
import { routes } from "@/shared/routing";

const scope = fork();
const root = document.getElementById("root")!;

allSettled(appStarted, { scope }).catch(() => {
  console.error("Failed to initialize");
});

ReactDOM.createRoot(root).render(
  <Provider value={scope}>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </Provider>,
);
