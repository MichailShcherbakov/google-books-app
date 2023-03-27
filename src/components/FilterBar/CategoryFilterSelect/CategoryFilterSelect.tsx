import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

export enum CategoryFilterEnum {
  ALL = "ALL",
  ART = "ART",
  BIOGRAPHY = "BIOGRAPHY",
  COMPUTERS = "COMPUTERS",
  HISTORY = "HISTORY",
  MEDICAL = "MEDICAL",
  POETRY = "POETRY",
}

export type CategoryFilterSelectItem = {
  id: string;
  label: string;
  value: CategoryFilterEnum;
};

const CATEGORY_FILTER_SELECT_ITEMS: CategoryFilterSelectItem[] = [
  {
    id: CategoryFilterEnum.ALL,
    label: "All",
    value: CategoryFilterEnum.ALL,
  },
  {
    id: CategoryFilterEnum.ART,
    label: "Art",
    value: CategoryFilterEnum.ART,
  },
  {
    id: CategoryFilterEnum.BIOGRAPHY,
    label: "Biography",
    value: CategoryFilterEnum.BIOGRAPHY,
  },
  {
    id: CategoryFilterEnum.COMPUTERS,
    label: "Computers",
    value: CategoryFilterEnum.COMPUTERS,
  },
  {
    id: CategoryFilterEnum.HISTORY,
    label: "History",
    value: CategoryFilterEnum.HISTORY,
  },
  {
    id: CategoryFilterEnum.MEDICAL,
    label: "Medical",
    value: CategoryFilterEnum.MEDICAL,
  },
  {
    id: CategoryFilterEnum.POETRY,
    label: "Poetry",
    value: CategoryFilterEnum.POETRY,
  },
];

export interface CategoryFilterSelectProps
  extends Omit<SelectProps, "value" | ""> {}

export function CategoryFilterSelect(props: CategoryFilterSelectProps) {
  return (
    <FormControl size="small">
      <InputLabel>Sort by</InputLabel>
      <Select {...props} value={CategoryFilterEnum.ALL} label="Sort by">
        {CATEGORY_FILTER_SELECT_ITEMS.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
