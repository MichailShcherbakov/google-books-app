import { useAppSelector } from "~/store/hooks";

export function useBooks() {
  const books = useAppSelector(state => state.books.all);

  return {
    books,
  };
}
