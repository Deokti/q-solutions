import cx from "classnames";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

// eslint-disable-next-line max-len
import { VirtualListExample } from "@/pages/virtual-list-page/ui/components/virtual-list-example/virtual-list-example.tsx";
import { VirtualListReview } from "@/pages/virtual-list-page/ui/components/virtual-list-review/virtual-list-review.tsx";

import { VirtualListHeader } from "../virtual-list-header/virtual-list-header.tsx";
import s from "./virtual-list-page.module.scss";

interface HomePageProps {
  className?: string;
}

const TABS = ["Обзор", "Пример", "Код"];

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

      <TabPanel>
        <VirtualListReview />
      </TabPanel>
      <TabPanel>
        <VirtualListExample />
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  </div>
);
