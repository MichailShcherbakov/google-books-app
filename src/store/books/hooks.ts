import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { RootState } from "..";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  loadMoreBooksAction,
  setBookCategoryFilterAction,
  setBooksSortByAction,
} from "./actions";
import { CategoryFilterEnum, RequestStatusEnum, SortByEnum } from "./type";

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

export function useLoadMoreBooks() {
  const dispatch = useAppDispatch();
  const hasNotLoadedBooks = useAppSelector(
    state => Object.keys(state.books.all).length < state.books.totalCount,
  );
  const isLoading = useAppSelector(
    state => state.books.status === RequestStatusEnum.REQUESTED,
  );

  const loadMoreBooks = React.useCallback(() => {
    dispatch(loadMoreBooksAction());
  }, [dispatch]);

  return {
    isLoading,
    loadMoreBooks,
    hasNotLoadedBooks,
  };
}

export function useSelectBooksInfo() {
  const totalCount = useAppSelector(state => state.books.totalCount);

  return { totalCount };
}
