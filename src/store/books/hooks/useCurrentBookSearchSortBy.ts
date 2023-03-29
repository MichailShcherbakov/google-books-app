import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "~/store/hooks";
import { setBookSearchSortByAction } from "../actions";
import { SortByEnum } from "../type";

export function useCurrentBookSearchSortBy() {
  const dispatch = useDispatch();
  const sortBy = useAppSelector(state => state.books.criteria.sortBy);

  const setSortBy = React.useCallback(
    (sortBy: SortByEnum) => {
      dispatch(
        setBookSearchSortByAction({
          sortBy,
        }),
      );
    },
    [dispatch],
  );

  return {
    sortBy,
    setSortBy,
  };
}
