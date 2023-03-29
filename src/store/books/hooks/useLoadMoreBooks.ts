import React from "react";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { loadMoreBooksAction } from "../actions";
import { RequestStatusEnum } from "../type";
import { useRequestBooks } from "./useRequestBooks";

export function useLoadMoreBooks() {
  const dispatch = useAppDispatch();
  const hasNotLoadedBooks = useAppSelector(
    state => state.books.all.length < state.books.totalCount,
  );
  const isLoading = useAppSelector(
    state =>
      state.books.status === RequestStatusEnum.REQUESTED ||
      state.books.status === RequestStatusEnum.REQUESTED_MORE,
  );

  const { requestBooks } = useRequestBooks();

  const loadMoreBooks = React.useCallback(() => {
    dispatch(loadMoreBooksAction());
    requestBooks({ loadMore: true });
  }, [dispatch, requestBooks]);

  return {
    isLoading,
    loadMoreBooks,
    hasNotLoadedBooks,
  };
}
