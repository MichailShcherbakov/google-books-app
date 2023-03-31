import { useAppSelector } from "~/store/hooks";

export function useCurrentBook() {
  const book = useAppSelector(state => state.books.currentBook);

  return { book };
}
