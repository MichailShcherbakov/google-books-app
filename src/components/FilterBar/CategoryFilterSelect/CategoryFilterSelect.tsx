import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { useCurrentBookFilterBy } from "~/store/books/hooks";
import { CategoryFilterEnum } from "~/store/books/type";

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
  extends Omit<SelectProps<CategoryFilterEnum>, "value" | ""> {}

export function CategoryFilterSelect(props: CategoryFilterSelectProps) {
  const { filterBy, setFilterBy } = useCurrentBookFilterBy();

  function changeHandler(e: SelectChangeEvent<CategoryFilterEnum>) {
    setFilterBy(e.target.value as CategoryFilterEnum);
  }

  return (
    <FormControl size="small">
      <InputLabel>Select category</InputLabel>
      <Select
        {...props}
        value={filterBy}
        label="Select category"
        onChange={changeHandler}
      >
        {CATEGORY_FILTER_SELECT_ITEMS.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
