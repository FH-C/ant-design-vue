import { InputNumber } from "ant-design-vue";
import { DigitFieldProps } from "../types";

const DigitField = ({
  text,
  mode,
  render,
  renderFormItem,
  fieldProps,
}: DigitFieldProps) => {
  const proxyChange = (value: number | string | null) => {
    let val = value ?? undefined;

    if (typeof val === "string") {
      val = Number(val);
    }
    if (
      typeof val === "number" &&
      !isNil(val) &&
      !isNil(fieldProps?.precision)
    ) {
      val = Number(
        fieldProps?.precision ? val.toFixed(fieldProps.precision) : val
      );
    }
    return fieldProps?.onChange?.(val);
  };
  if (mode === "read") {
    let fractionDigits = {} as any;
    if (fieldProps?.precision) {
      fractionDigits = {
        minimumFractionDigits: Number(fieldProps.precision),
        maximumFractionDigits: Number(fieldProps.precision),
      };
    }
    const digit = new Intl.NumberFormat(undefined, {
      ...fractionDigits,
    }).format(Number(text) as number);
    const dom = (
      <span ref={ref}>{fieldProps?.formatter?.(digit) || digit}</span>
    );
    if (render) {
      return render(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }

  if (mode === "edit") {
    const dom = (
      <InputNumber
        ref={ref}
        min={0}
        {...omit(fieldProps, ["onChange"])}
        onChange={proxyChange}
      />
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};
