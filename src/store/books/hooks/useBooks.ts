import React from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "~/store/hooks";
import { CategoryFilterEnum, RequestStatusEnum, SortByEnum } from "../type";
import { useCurrentBookSearchFilterBy } from "./useCurrentBookSearchFilterBy";
import { useCurrentBookSearchPattern } from "./useCurrentBookSearchPattern";
import { useCurrentBookSearchSortBy } from "./useCurrentBookSearchSortBy";
import { useRequestBooks } from "./useRequestBooks";

export function useBooks() {
  const isInitialized = React.useRef(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const setSearchParamsStable =
    React.useRef<
      (params: Record<string, string>, options?: { replace?: boolean }) => void
    >(setSearchParams);

  setSearchParamsStable.current = setSearchParams;

  const criteria = useAppSelector(state => state.books.criteria);
  const books = useAppSelector(state => state.books.all);

  const isLoading = useAppSelector(
    state => state.books.status === RequestStatusEnum.REQUESTED,
  );

  const wasNotRequested = useAppSelector(
    state => state.books.status === RequestStatusEnum.IDLE,
  );

  const isEmpty = useAppSelector(state => !state.books.all.length);

  const { requestBooks } = useRequestBooks();

  const { setPattern } = useCurrentBookSearchPattern();
  const { setFilterBy } = useCurrentBookSearchFilterBy();
  const { setSortBy } = useCurrentBookSearchSortBy();

  React.useEffect(() => {
    if (isInitialized.current) return;

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
  }, [requestBooks, searchParams, setFilterBy, setPattern, setSortBy]);

  React.useEffect(() => {
    // skip initial criteria changing
    if (!isInitialized.current) {
      isInitialized.current = true;
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
  }, [requestBooks, criteria.pattern, criteria.filterBy, criteria.sortBy]);

  return {
    books,
    wasNotRequested,
    isLoading,
    isEmpty,
  };
}
