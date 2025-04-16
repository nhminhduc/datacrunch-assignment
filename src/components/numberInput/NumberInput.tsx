import React from "react";
import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  Label,
  Group,
  Input,
  Button as AriaButton, // Use AriaButton for the increment/decrement triggers
} from "react-aria-components";
import styles from "./NumberInput.module.css";
import { Button } from "../button/button"; // Import your custom Button

export interface NumberInputProps extends AriaNumberFieldProps {
  label?: string;
}

export const NumberInput = ({ label, ...props }: NumberInputProps) => {
  return (
    <AriaNumberField {...props} className={styles.numberField}>
      {label && <Label className={styles.label}>{label}</Label>}
      <Group className={styles.group}>
        <Button
          slot="decrement"
          variant="outlined"
          color="secondary"
          size="small"
          icon="minus"
          iconOnly
        />
        <Input className={styles.input} />
        <Button
          slot="increment"
          variant="outlined"
          color="secondary"
          size="small"
          icon="plus"
          iconOnly
        />
      </Group>
    </AriaNumberField>
  );
};
