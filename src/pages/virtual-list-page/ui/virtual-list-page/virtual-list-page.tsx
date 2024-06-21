import cx from "classnames";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { VirtualListCode } from "../components/virtual-list-code/virtual-list-code.tsx";
import { VirtualListExample } from "../components/virtual-list-example/virtual-list-example.tsx";
import { VirtualListReview } from "../components/virtual-list-review/virtual-list-review.tsx";
import { VirtualListHeader } from "../virtual-list-header/virtual-list-header.tsx";
import s from "./virtual-list-page.module.scss";

interface HomePageProps {
  className?: string;
}

const TABS = ["Обзор", "Пример", "Код"];
const CONTENTS = [<VirtualListReview />, <VirtualListExample />, <VirtualListCode />];

export const VirtualListPage = ({ className }: HomePageProps) => (
  <div className={cx(s.root, className)}>
    <VirtualListHeader />

    <Tabs className={s.tabs}>
      <TabList className={s.tabsList}>
        {TABS.map((tab) => {
          return (
            <Tab
              key={tab}
              className={s.tab}
              selectedClassName={s.tabActive}
            >
              {tab}
            </Tab>
          );
        })}
      </TabList>

      {CONTENTS.map((content, index) => {
        return <TabPanel key={index}>{content}</TabPanel>;
      })}
    </Tabs>
  </div>
);
