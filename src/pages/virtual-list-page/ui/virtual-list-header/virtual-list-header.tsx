import { Link } from "atomic-router-react";
import cx from "classnames";

import IconArrowLeft from "@/shared/assets/arrow-sm-left.svg?react";
import { ROUTES } from "@/shared/routing";
import { SButton } from "@/shared/ui/s-button";

import s from "./virtual-list-header.module.scss";

export const VirtualListHeader = () => (
  <div className={cx(s.root)}>
    <header className={s.header}>
      <SButton
        className={s.button}
        title={"Вернуться на главную страницу"}
      >
        <Link to={ROUTES.HOME}>
          <IconArrowLeft />
        </Link>
      </SButton>
      <h1 className={s.title}>
        <span>Приложения /</span> <span>Virtual List</span>
      </h1>
    </header>
  </div>
);
