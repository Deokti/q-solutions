import { Link } from "atomic-router-react";
import cx from "classnames";
import { ReactNode } from "react";

import IconArrowMenu from "@/shared/assets/arrow-menu.svg?react";
import { MENU } from "@/shared/layouts/main-layout/model/constants.tsx";
import { SButton } from "@/shared/ui/s-button";

import s from "./main-layout.module.scss";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { className, children } = props;

  return (
    <div className={cx(s.root, className)}>
      <div className={s.sidebar}>
        <header className={s.header}>
          <h1 className={s.title}>{"QSolutions"}</h1>
          <SButton className={s.button}>
            <IconArrowMenu />
          </SButton>
        </header>

        <menu className={s.menuList}>
          {MENU.map(({ id, name, icon, to }) => {
            return (
              <li
                className={s.menuItem}
                key={id}
              >
                <Link
                  to={to}
                  className={s.menuLink}
                >
                  {icon}
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
        </menu>
      </div>

      <div className={s.children}>{children}</div>
    </div>
  );
};
