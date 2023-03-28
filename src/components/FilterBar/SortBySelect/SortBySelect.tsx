import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { useCurrentBookSortBy } from "~/store/books/hooks";
import { SortByEnum } from "~/store/books/type";

export type SortBySelectItem = {
  id: string;
  label: string;
  value: SortByEnum;
};

const SORT_BY_SELECT_ITEMS: SortBySelectItem[] = [
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

export interface SortBySelectProps
  extends Omit<SelectProps<SortByEnum>, "value" | ""> {}

export function SortBySelect(props: SortBySelectProps) {
  const { sortBy, setSortBy } = useCurrentBookSortBy();

  function changeHandler(e: SelectChangeEvent<SortByEnum>) {
    setSortBy(e.target.value as SortByEnum);
  }

  return (
    <FormControl size="small">
      <InputLabel>Sort by</InputLabel>
      <Select
        {...props}
        value={sortBy}
        label="Sort by"
        onChange={changeHandler}
      >
        {SORT_BY_SELECT_ITEMS.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
