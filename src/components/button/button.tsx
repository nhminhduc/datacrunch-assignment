import React, { forwardRef } from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import Icon from "../icon/Icon";
import { IconNameType } from "../icon/utils";
import clsx from "clsx";

type ButtonVariant = "contained" | "outlined" | "input";
type ButtonColor = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "input";

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
    const variantClasses = {
      contained: {
        primary: "bg-primary text-white border-primary hover:opacity-80",
        secondary: "bg-gray-600 text-white border-gray-600 hover:bg-gray-400",
      },
      outlined: {
        primary:
          "bg-transparent text-primary border-primary hover:bg-opacity-10 hover:bg-primary",
        secondary:
          "bg-transparent text-primary border-primary hover:bg-gray-300",
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
        "px-6 py-1 text-xs leading-4 rounded-lg",
        iconOnly && "px-1.5 rounded-sm"
      ),
      medium: clsx(
        "px-10 py-1 text-sm leading-5 rounded-lg",
        iconOnly && "px-2.5 rounded-sm"
      ),
      input: clsx(iconOnly && "p-[2px] rounded-sm"),
    };

    const classNames = clsx(
      "flex items-center justify-center gap-2 border cursor-pointer font-medium transition-colors outline-none",
      sizeClasses[size],
      getVariantClass(variant, color),
      `focus-visible:outline-2 focus-visible:outline-offset-2`,
      color === "primary"
        ? "focus-visible:outline-primary"
        : "focus-visible:outline-gray-500",
      props.isDisabled && "opacity-50 cursor-not-allowed"
    );

    return (
      <AriaButton {...props} ref={ref} className={classNames}>
        {icon && (
          <span className="mt-[1px]">
            <Icon name={icon} size={12} />
          </span>
        )}
        {!iconOnly && children && <span>{children}</span>}
      </AriaButton>
    );
  }
);

Button.displayName = "Button";
