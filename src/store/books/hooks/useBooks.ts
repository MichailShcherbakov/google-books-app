import { useAppSelector } from "~/store/hooks";
import { RequestStatusEnum } from "../type";
import { useSyncBookCriteriaWithSearchParam } from "./useSyncBookCriteriaWithSearchParam";

export function useBooks() {
  const books = useAppSelector(state => state.books.all);

  useSyncBookCriteriaWithSearchParam();

  const isLoading = useAppSelector(
    state => state.books.status === RequestStatusEnum.REQUESTED,
  );

  const wasNotRequested = useAppSelector(
    state => state.books.status === RequestStatusEnum.IDLE,
  );

  const isEmpty = useAppSelector(state => !state.books.all.length);

  return {
    books,
    wasNotRequested,
    isLoading,
    isEmpty,
  };
}
