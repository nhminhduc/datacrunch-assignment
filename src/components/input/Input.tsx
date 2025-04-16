import {
  Input as AriaInput,
  Label,
  TextField,
  TextFieldProps,
} from "react-aria-components";
import styles from "./Input.module.css";

export interface InputProps extends TextFieldProps {
  label?: string;
  placeholder?: string;
}

export const Input = ({ label, placeholder, ...props }: InputProps) => {
  return (
    <TextField {...props} className={styles.textField}>
      {label && <Label className={styles.label}>{label}</Label>}
      <AriaInput placeholder={placeholder} className={styles.input} />
    </TextField>
  );
};
