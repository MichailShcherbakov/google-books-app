import { useAppSelector } from "~/store/hooks";

export function useCurrentBookSearchInfo() {
  const totalCount = useAppSelector(state => state.books.totalCount);

  return { totalCount };
}
