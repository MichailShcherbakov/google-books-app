import React from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "~/store/hooks";
import { CategoryFilterEnum, SortByEnum } from "../type";
import { useCurrentBookSearchFilterBy } from "./useCurrentBookSearchFilterBy";
import { useCurrentBookSearchPattern } from "./useCurrentBookSearchPattern";
import { useCurrentBookSearchSortBy } from "./useCurrentBookSearchSortBy";
import { useRequestBooks } from "./useRequestBooks";

export function useSyncBookCriteriaWithSearchParam() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isBookCriteriaSyncWithSearchParams = React.useRef(false);
  const wasSyncRequested = React.useRef(false);

  const setSearchParamsStable =
    React.useRef<
      (params: Record<string, string>, options?: { replace?: boolean }) => void
    >(setSearchParams);

  setSearchParamsStable.current = setSearchParams;

  const { setPattern } = useCurrentBookSearchPattern();
  const { setFilterBy } = useCurrentBookSearchFilterBy();
  const { setSortBy } = useCurrentBookSearchSortBy();

  const criteria = useAppSelector(state => state.books.criteria);

  const { requestBooks } = useRequestBooks();

  React.useEffect(() => {
    if (wasSyncRequested.current) return;

    const pattern = searchParams.get("q") ?? "";
    let filterBy = searchParams.get("filterBy") as CategoryFilterEnum;
    let sortBy = searchParams.get("sortBy") as SortByEnum;

    filterBy = Object.values(CategoryFilterEnum).includes(filterBy)
      ? filterBy
      : CategoryFilterEnum.ALL;

    sortBy = Object.values(SortByEnum).includes(sortBy)
      ? sortBy
      : SortByEnum.RELEVANCE;

    setPattern(pattern);
    setFilterBy(filterBy);
    setSortBy(sortBy);

    isBookCriteriaSyncWithSearchParams.current =
      criteria.pattern === pattern &&
      criteria.filterBy === filterBy &&
      criteria.sortBy === sortBy;

    wasSyncRequested.current = true;
  }, [
    criteria.filterBy,
    criteria.pattern,
    criteria.sortBy,
    searchParams,
    setFilterBy,
    setPattern,
    setSortBy,
  ]);

  React.useEffect(() => {
    if (!isBookCriteriaSyncWithSearchParams.current) {
      isBookCriteriaSyncWithSearchParams.current = true;
      return;
    }

    setSearchParamsStable.current(
      {
        q: criteria.pattern,
        filterBy: criteria.filterBy,
        sortBy: criteria.sortBy,
      },
      { replace: true },
    );

    requestBooks();
  }, [criteria.pattern, criteria.filterBy, criteria.sortBy, requestBooks]);
}
