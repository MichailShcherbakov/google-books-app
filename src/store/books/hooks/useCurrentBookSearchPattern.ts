import React from "react";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { setBookSearchPatternAction } from "../actions";

export function useCurrentBookSearchPattern() {
  const dispatch = useAppDispatch();
  const pattern = useAppSelector(state => state.books.criteria.pattern);

  const setPattern = React.useCallback(
    (pattern: string) => {
      dispatch(
        setBookSearchPatternAction({
          pattern,
        }),
      );
    },
    [dispatch],
  );

  return { pattern, setPattern };
}
