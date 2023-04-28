import type { InputProps, InputNumberProps } from "ant-design-vue";

export type ModeType = "edit" | "read" | undefined;

// export type TextFieldProps = InputProps & {
//   prefix?: string;
//   suffix?: string;
// };

export interface TextFieldProps {
  text?: string;
  emptyText?: string;
  render?: any;
  renderFormItem?: any;
  mode?: "edit" | "read";
  fieldProps?: InputProps;
}

export interface DigitFieldProps {
  text?: string;
  render?: any;
  renderFormItem?: any;
  mode?: "edit" | "read";
  fieldProps?: InputNumberProps;
}

export type FieldProps = {
  text?: any;
  mode?: "edit" | "read";
  renderFormItem?: any;
  render?: any;
} & (
  | {
      valueType: "text";
      emptyText?: string;
      fieldProps?: InputProps;
    }
  | {
      valueType: "digit";
      fieldProps?: InputNumberProps;
    }
);
