import React, { forwardRef } from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import Icon from "../icon/Icon";
import { IconNameType } from "../icon/utils";
import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonVariant = "contained" | "outlined" | "input";
type ButtonColor = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "input";
type IconPosition = "left" | "right";

export interface ButtonProps extends AriaButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: IconNameType;
  iconPosition?: IconPosition;
  iconOnly?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "contained",
      color = "primary",
      size = "medium",
      icon,
      iconPosition = "left",
      iconOnly = false,
      isDisabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      contained: {
        primary:
          "bg-primary text-white border-primary hover:enabled:bg-primary-dark",
        secondary:
          "bg-gray-200 text-black border-gray-200 hover:enabled:bg-gray-300",
      },
      outlined: {
        primary:
          "bg-transparent text-primary border-primary hover:enabled:border-primary-dark hover:enabled:bg-primary-surface",
        secondary:
          "bg-transparent text-black border-gray-400 hover:enabled:border-gray-500",
      },
      input: "bg-gray-300 border-none m-[2px]",
    } as const;

    const getVariantClass = (
      variant: ButtonVariant,
      color: ButtonColor
    ): string => {
      const variantClass = variantClasses[variant];
      return typeof variantClass === "string"
        ? variantClass
        : variantClass[color];
    };

    const sizeClasses = {
      small: clsx(
        "max-w-[96px] px-2 py-1 text-xs leading-4 rounded-lg",
        iconOnly && "!px-1 !py-1 rounded-sm"
      ),
      medium: clsx(
        "max-w-[135px] px-6 py-2 text-sm leading-5 rounded-lg",
        iconOnly && "!px-2 !py-2 rounded-sm"
      ),
      input: clsx(iconOnly && "p-[2px] rounded-sm"),
    };

    const classNames = clsx(
      styles["button-base"],
      "flex items-center justify-center gap-1.5",
      sizeClasses[size],
      getVariantClass(variant, color),
      color === "primary"
        ? "focus-visible:ring-primary/20 focus-visible:ring-offset-1 focus-visible:ring-2"
        : "focus-visible:ring-gray-500 focus-visible:ring-offset-1 focus-visible:ring-2",
      isDisabled && "opacity-50 !cursor-not-allowed"
    );

    const iconElement = icon && (
      <span className="flex-shrink-0" data-testid="button-icon">
        <Icon name={icon} size={size === "small" ? 12 : 14} />
      </span>
    );

    return (
      <AriaButton
        {...props}
        ref={ref}
        className={classNames}
        isDisabled={isDisabled}
      >
        {iconPosition === "left" && iconElement}
        {!iconOnly && children && <span>{children}</span>}
        {iconPosition === "right" && !iconOnly && iconElement}
      </AriaButton>
    );
  }
);

Button.displayName = "Button";
