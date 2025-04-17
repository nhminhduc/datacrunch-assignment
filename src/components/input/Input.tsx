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
        <Label className="text-[15px] font-semibold leading-5 text-[#454545]">
          {label}
        </Label>
      )}
      <AriaInput
        placeholder={placeholder}
        className="pl-4 pr-2 py-2 border border-[#B9B9B9] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-[178px] h-8"
      />
    </TextField>
  );
};
