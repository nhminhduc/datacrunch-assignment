import React, { forwardRef } from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import styles from "./Button.module.css";
import Icon from "../icon/Icon";
import { IconNameType } from "../icon/utils";

type ButtonVariant = "contained" | "outlined";
type ButtonColor = "primary" | "secondary";
type ButtonSize = "small" | "medium";

export interface ButtonProps extends AriaButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: IconNameType;
  iconOnly?: boolean;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "contained",
      color = "primary",
      size = "medium",
      icon,
      iconOnly = false,
      children,
      ...props
    },
    ref
  ) => {
    const classNames = [
      styles.button,
      styles[size],
      styles[variant],
      styles[color],
      iconOnly ? styles.iconOnly : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <AriaButton {...props} ref={ref} className={classNames}>
        {icon && (
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        )}
        {!iconOnly && children && (
          <span className={styles.text}>{children}</span>
        )}
      </AriaButton>
    );
  }
);

Button.displayName = "Button";
