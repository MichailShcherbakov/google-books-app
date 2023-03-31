import React from "react";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { requestBooksAction } from "../actions";
import { RequestStatusEnum } from "../type";

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

  const loadMoreBooks = React.useCallback(() => {
    dispatch(requestBooksAction({ loadMore: true }));
  }, [dispatch]);

  return {
    isLoading,
    loadMoreBooks,
    hasNotLoadedBooks,
  };
}
