import { TextField as MaterialTextField } from "@mui/material";
import type { FormikProps } from "formik";

interface TextFieldProps {
  label: string;
  name: string;
  form: FormikProps<any>;
}

export const TextField = ({ label, name, form }: TextFieldProps): JSX.Element => {
  const error: any = form.touched[name] && Boolean(form.errors[name]);
  const helperText: any = form.touched[name] && form.errors[name];

  return (
    <MaterialTextField
      error={error}
      fullWidth
      helperText={helperText}
      InputLabelProps={{ shrink: true }}
      label={label}
      name={name}
      onChange={form.handleChange}
      type="text"
      value={form.values[name]?.trimStart()}
      variant="standard"
    />
  );
};
