import { TextField } from "@mui/material";
import type { FormikProps } from "formik";
import { NumericFormat } from "react-number-format";

interface NumberFieldProps {
  allowNegative?: boolean;
  decimalScale?: number;
  form: FormikProps<any>;
  label: string;
  limit?: number;
  name: string;
}

export const NumberField = ({
  allowNegative = true,
  decimalScale,
  form,
  label,
  limit = 999999999999999,
  name,
}: NumberFieldProps): JSX.Element => {
  const error: any = form.touched[name] && Boolean(form.errors[name]);
  const helperText: any = form.touched[name] && form.errors[name];

  return (
    <NumericFormat
      allowNegative={allowNegative}
      customInput={TextField}
      decimalScale={decimalScale}
      decimalSeparator=","
      error={error}
      fullWidth
      helperText={helperText}
      InputLabelProps={{ shrink: true }}
      isAllowed={({ floatValue }): boolean => (floatValue ? floatValue <= limit : true)}
      label={label}
      name={name}
      onValueChange={({ floatValue }) => form.setFieldValue(name, floatValue)}
      thousandSeparator="."
      value={form.values[name]}
      variant="standard"
    />
  );
};
