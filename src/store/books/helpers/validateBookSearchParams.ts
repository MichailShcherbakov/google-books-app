import { BookSearchCriteria, CategoryFilterEnum, SortByEnum } from "../type";

export function validateBookSearchParams(query: unknown) {
  const q = query as Partial<BookSearchCriteria>;

  const pattern = q.pattern ?? "";
  let filterBy = q.filterBy ?? CategoryFilterEnum.ALL;
  let sortBy = q.sortBy ?? SortByEnum.RELEVANCE;

  filterBy = Object.values(CategoryFilterEnum).includes(filterBy)
    ? filterBy
    : CategoryFilterEnum.ALL;

  sortBy = Object.values(SortByEnum).includes(sortBy)
    ? sortBy
    : SortByEnum.RELEVANCE;

  return { pattern, filterBy, sortBy };
}
