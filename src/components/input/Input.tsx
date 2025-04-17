import {
  Input as AriaInput,
  Label,
  TextField,
  TextFieldProps,
} from "react-aria-components";

export interface InputProps extends TextFieldProps {
  label?: string;
  placeholder?: string;
}

export const Input = ({ label, placeholder, ...props }: InputProps) => {
  return (
    <TextField {...props} className="flex flex-col gap-2">
      {label && (
        <Label className="text-[15px] font-semibold leading-5 text-gray-800">
          {label}
        </Label>
      )}
      <AriaInput
        placeholder={placeholder}
        className="pl-4 pr-2 py-2 border border-gray-400 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-[178px] h-8"
      />
    </TextField>
  );
};
