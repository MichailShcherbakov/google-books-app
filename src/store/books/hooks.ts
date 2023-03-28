import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { RootState } from "..";
import { useAppSelector } from "../hooks";
import { setBookCategoryFilterAction, setBooksSortByAction } from "./actions";
import { CategoryFilterEnum, SortByEnum } from "./type";

export function useCurrentBookSortBy() {
  const dispatch = useDispatch();
  const sortBy = useAppSelector(state => state.books.criteria.sortBy);

  const setSortBy = React.useCallback(
    (sortBy: SortByEnum) => {
      dispatch(
        setBooksSortByAction({
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

export function useCurrentBookFilterBy() {
  const dispatch = useDispatch();
  const filterBy = useAppSelector(state => state.books.criteria.filterBy);

  const setFilterBy = React.useCallback(
    (filterBy: CategoryFilterEnum) => {
      dispatch(
        setBookCategoryFilterAction({
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

const booksSelector = createSelector(
  (state: RootState) => state.books.all,
  bookMap => Object.values(bookMap),
);

export function useBooks() {
  const books = useAppSelector(booksSelector);

  return {
    books,
  };
}
