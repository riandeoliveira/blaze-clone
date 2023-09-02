import { Autocomplete, Checkbox, TextField } from "@mui/material";
import type { SyntheticEvent } from "react";
import type { ISelectOptions } from "types";

interface MultiSelectProps {
  disableClearable?: boolean;
  label: string;
  onSelect: (event: SyntheticEvent, values: ISelectOptions[] | null) => void;
  onLeave?: () => void;
  options: ISelectOptions[];
  value: ISelectOptions[] | null;
}

export const MultiSelect = ({
  label,
  onSelect,
  disableClearable,
  options,
  onLeave,
  value,
}: MultiSelectProps): JSX.Element => {
  return (
    <Autocomplete
      multiple
      fullWidth
      disableClearable={disableClearable}
      disableCloseOnSelect
      size="small"
      noOptionsText="Sem opções"
      isOptionEqualToValue={(option, value): boolean => option.value === value.value}
      limitTags={2}
      options={options ? options : []}
      value={value ?? undefined}
      getOptionLabel={(option): string => option.label}
      renderOption={(props, option, { selected }): JSX.Element => (
        <li {...props} style={{ padding: "4px 12px" }}>
          <Checkbox checked={selected} />
          {option.label}
        </li>
      )}
      onBlur={onLeave}
      onChange={onSelect}
      renderInput={(params): JSX.Element => (
        <TextField {...params} label={label} variant="standard" />
      )}
    />
  );
};
