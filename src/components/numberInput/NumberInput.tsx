import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  Label,
  Group,
  Input,
} from "react-aria-components";
import { Button } from "../button/button";
import clsx from "clsx";

export interface NumberInputProps extends AriaNumberFieldProps {
  label?: string;
}

export const NumberInput = ({ label, ...props }: NumberInputProps) => {
  return (
    <AriaNumberField
      {...props}
      className={clsx("flex flex-col gap-1", props.isDisabled && "opacity-70")}
    >
      {label && (
        <Label
          className={clsx(
            "text-sm font-medium text-gray-800",
            props.isDisabled && "text-gray-500"
          )}
        >
          {label}
        </Label>
      )}
      <Group
        className={clsx(
          "w-[104px] h-[24px] flex items-center border border-gray-400 rounded-sm",
          "transition-[border-color,box-shadow]",
          "data-[focus-within]:border-gray-500",
          props.isDisabled &&
            "bg-gray-100 cursor-not-allowed border-gray-300 shadow-none"
        )}
      >
        <Button
          slot="decrement"
          variant="input"
          color="secondary"
          size="input"
          icon="minus"
          iconOnly
        />
        <Input
          className={clsx(
            "px-3 py-2 flex-grow text-sm text-center min-w-[40px]",
            "border-none outline-none bg-transparent",
            props.isDisabled && "cursor-not-allowed"
          )}
        />
        <Button
          slot="increment"
          variant="input"
          color="secondary"
          size="input"
          icon="plus"
          iconOnly
        />
      </Group>
    </AriaNumberField>
  );
};
