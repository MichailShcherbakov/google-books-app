import { useAppSelector } from "~/store/hooks";
import { useQueryParamsChange } from "~/tools/hooks/useQueryParamsChange";

export function useBooks() {
  const books = useAppSelector(state => state.books.all);
  const isEmpty = useAppSelector(state => !state.books.all.length);

  const { isChangeStart: isLoading } = useQueryParamsChange("/search");

  return {
    books,
    isLoading,
    isEmpty,
  };
}
