import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "~/store/hooks";
import { setBookSearchSortByAction } from "../actions";
import { SortByEnum } from "../type";
import { useRequestBooks } from "./useRequestBooks";

export function useCurrentBookSearchSortBy() {
  const dispatch = useDispatch();
  const sortBy = useAppSelector(state => state.books.criteria.sortBy);

  const { requestBooks } = useRequestBooks();

  const setSortBy = React.useCallback(
    (sortBy: SortByEnum) => {
      dispatch(
        setBookSearchSortByAction({
          sortBy,
        }),
      );
      requestBooks();
    },
    [dispatch, requestBooks],
  );

  return {
    sortBy,
    setSortBy,
  };
}
