import React from "react";
import { useAppSelector } from "~/store/hooks";
import { useBookSearchCriteria } from "./useBookSearchCriteria";

export function useCurrentBookSearchPattern() {
  const pattern = useAppSelector(state => state.books.criteria.pattern);

  const { setCriteria } = useBookSearchCriteria();

  const setPattern = React.useCallback(
    (pattern: string) => {
      setCriteria({
        pattern,
      });
    },
    [setCriteria],
  );

  return { pattern, setPattern };
}
