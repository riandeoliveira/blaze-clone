import { Autocomplete, TextField } from "@mui/material";
import type { SyntheticEvent } from "react";
import type { ISelectOptions } from "types";

interface SelectProps {
  disableClearable?: boolean;
  label: string;
  onSelect: (event: SyntheticEvent, value: ISelectOptions | null) => void;
  options: ISelectOptions[];
  value: ISelectOptions | null;
}

export const Select = ({
  disableClearable,
  label,
  onSelect,
  options,
  value,
}: SelectProps): JSX.Element => {
  return (
    <Autocomplete
      disableClearable={disableClearable}
      fullWidth
      noOptionsText="Sem opções"
      getOptionLabel={(option): string => option.label}
      onChange={onSelect}
      options={options}
      renderOption={(props, option): JSX.Element => <li {...props}>{option.label}</li>}
      size="small"
      value={value || undefined}
      renderInput={(params): JSX.Element => (
        <TextField {...params} label={label} variant="standard" />
      )}
    />
  );
};
