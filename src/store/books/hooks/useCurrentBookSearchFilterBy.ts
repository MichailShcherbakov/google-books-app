import React from "react";
import { useAppSelector } from "~/store/hooks";
import { CategoryFilterEnum } from "../type";
import { useBookSearchCriteria } from "./useBookSearchCriteria";

export function useCurrentBookSearchFilterBy() {
  const filterBy = useAppSelector(state => state.books.criteria.filterBy);

  const { setCriteria } = useBookSearchCriteria();

  const setFilterBy = React.useCallback(
    (filterBy: CategoryFilterEnum) => {
      setCriteria({
        filterBy,
      });
    },
    [setCriteria],
  );

  return {
    filterBy,
    setFilterBy,
  };
}
