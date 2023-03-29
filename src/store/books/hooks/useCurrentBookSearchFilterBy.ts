import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "~/store/hooks";
import { setBookSearchFilterByAction } from "../actions";
import { CategoryFilterEnum } from "../type";

export function useCurrentBookSearchFilterBy() {
  const dispatch = useDispatch();
  const filterBy = useAppSelector(state => state.books.criteria.filterBy);

  const setFilterBy = React.useCallback(
    (filterBy: CategoryFilterEnum) => {
      dispatch(
        setBookSearchFilterByAction({
          filterBy,
        }),
      );
    },
    [dispatch],
  );

  return {
    filterBy,
    setFilterBy,
  };
}
