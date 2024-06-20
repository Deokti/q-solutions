import "@fontsource-variable/open-sans";
import "@fontsource-variable/roboto-slab";
import "highlight.js/styles/a11y-light.css";

import { RoutesView } from "@/pages";

import { MainLayout } from "@/shared/layouts/main-layout";

import "./styles/index.scss";

function App() {
  return (
    <MainLayout className={"app"}>
      <RoutesView />
    </MainLayout>
  );
}

export default App;
