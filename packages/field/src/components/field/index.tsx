import type { FieldProps } from "../types";
import FieldText from "../text/index.tsx";

const Field = ({
  text,
  valueType,
  mode,
  renderFormItem,
  render,
  fieldProps,
}: FieldProps) => {
  if (valueType === "text") {
    return (
      <FieldText
        text={text}
        mode={mode}
        render={render}
        renderFormItem={renderFormItem}
        fieldProps={fieldProps}
      ></FieldText>
    );
  }
};

export default Field;
