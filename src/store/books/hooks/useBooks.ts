import { useAppSelector } from "~/store/hooks";
import { useQueryParamsChange } from "~/tools/hooks/useQueryParamsChange";
import { RequestStatusEnum } from "../type";

export function useBooks() {
  const books = useAppSelector(state => state.books.all);
  const isEmpty = useAppSelector(state => !state.books.all.length);
  const isError = useAppSelector(
    state => state.books.status === RequestStatusEnum.REQUEST_FAILED,
  );

  const { isChangeStart: isLoading } = useQueryParamsChange("/search");

  return {
    books,
    isLoading,
    isError,
    isEmpty,
  };
}
