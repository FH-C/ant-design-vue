import { Input } from "ant-design-vue";
import { TextFieldProps } from "../types";
import { inject, shallowRef } from "vue";

const TextField = ({
  text,
  emptyText,
  render,
  renderFormItem,
  mode,
  fieldProps,
}: TextFieldProps) => {
  const { prefix = "", suffix = "" } = fieldProps || {};

  const modeConfig = inject<"edit" | "read" | undefined>("mode");
  const inputRef = shallowRef<HTMLInputElement>();
  if ((mode ?? modeConfig) === "read") {
    const dom = (
      <>
        {prefix}
        {text ?? emptyText}
        {suffix}
      </>
    );

    if (render) {
      return render(text, { mode, ...fieldProps }, dom) ?? emptyText;
    }
    return dom;
  }

  if ((mode ?? modeConfig) === "edit") {
    const dom = <Input ref={inputRef} allowClear {...fieldProps} />;

    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};

export default TextField;
