import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

export enum SortByEnum {
  NONE = "NONE",
  RELEVANCE = "RELEVANCE",
  NEWEST = "NEWEST",
}

export type SortBySelectItem = {
  id: string;
  label: string;
  value: SortByEnum;
};

const SORT_BY_SELECT_ITEMS: SortBySelectItem[] = [
  {
    id: SortByEnum.NONE,
    label: "None",
    value: SortByEnum.NONE,
  },
  {
    id: SortByEnum.RELEVANCE,
    label: "Relevance",
    value: SortByEnum.RELEVANCE,
  },
  {
    id: SortByEnum.NEWEST,
    label: "Newest",
    value: SortByEnum.NEWEST,
  },
];

export interface SortBySelectProps extends Omit<SelectProps, "value" | ""> {}

export function SortBySelect(props: SortBySelectProps) {
  return (
    <FormControl size="small">
      <InputLabel>Sort by</InputLabel>
      <Select {...props} value={SortByEnum.RELEVANCE} label="Sort by">
        {SORT_BY_SELECT_ITEMS.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
