import React from "react";
import { useAppSelector } from "~/store/hooks";
import { SortByEnum } from "../type";
import { useBookSearchCriteria } from "./useBookSearchCriteria";

export function useCurrentBookSearchSortBy() {
  const sortBy = useAppSelector(state => state.books.criteria.sortBy);

  const { setCriteria } = useBookSearchCriteria();

  const setSortBy = React.useCallback(
    (sortBy: SortByEnum) => {
      setCriteria({
        sortBy,
      });
    },
    [setCriteria],
  );

  return {
    sortBy,
    setSortBy,
  };
}
