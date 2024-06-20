import cx from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

import s from "./s-button.module.scss";

interface SButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variable?: "text";
  children: ReactNode;
}

export const SButton = (props: SButtonProps) => {
  const { className, variable = "text", children, ...otherProps } = props;

  const additional = [s[variable]];

  return (
    <button
      className={cx(s.root, className, additional)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
