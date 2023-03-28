import React from "react";
import { useAppDispatch } from "~/store/hooks";
import { requestBooksAction, RequestBooksActionOptions } from "../actions";

export function useRequestBooks() {
  const dispatch = useAppDispatch();

  const requestBooks = React.useCallback(
    (options?: RequestBooksActionOptions) => {
      dispatch(requestBooksAction(options));
    },
    [dispatch],
  );

  return { requestBooks };
}
