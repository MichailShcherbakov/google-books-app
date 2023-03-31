import { useRouter } from "next/router";
import React from "react";
import { validateBookSearchParams } from "../helpers/validateBookSearchParams";
import { BookSearchCriteria } from "../type";

/**
 * Next router only first time parsing query params, so we have to sync it yourself
 */
let query: Pick<BookSearchCriteria, "pattern" | "filterBy" | "sortBy"> | null =
  null;

export function useBookSearchCriteria() {
  const router = useRouter();

  const setCriteria = React.useCallback(
    (
      criteria: Partial<
        Pick<BookSearchCriteria, "pattern" | "filterBy" | "sortBy">
      >,
    ) => {
      query = {
        ...(query ?? validateBookSearchParams(router.query)),
        ...criteria,
      };

      router.push({
        pathname: "/search",
        query,
      });
    },
    [router],
  );

  return {
    setCriteria,
  };
}
