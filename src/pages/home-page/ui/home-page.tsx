import cx from "classnames";

import IconNoResult from "@/shared/assets/no-results.svg?react";

import s from "./home-page.module.scss";

interface HomePageProps {
  className?: string;
}

export const HomePage = ({ className }: HomePageProps) => (
  <div className={cx(s.root, className)}>
    <div className={s.inner}>
      <IconNoResult />
      <p>Нет выбранного проекта</p>
    </div>
  </div>
);
