import { createAction } from "@reduxjs/toolkit";
import { Book, BookSearchCriteria, RequestStatusEnum } from "./type";

/**
 * @private
 */
export const setBookRequestStatusAction = createAction<{
  status: RequestStatusEnum;
}>("setBookRequestStatusAction");

export type RequestBooksActionOptions = {
  loadMore?: boolean;
};

export const requestBooksAction = createAction<
  RequestBooksActionOptions | undefined
>("requestBooksAction");

export const setBooksAction = createAction<{
  books: Book[];
  totalCount: number;
}>("setBooksAction");

export const appendBooksAction = createAction<{
  books: Book[];
  totalCount: number;
}>("appendBooksAction");

export const setBookSearchPatternAction = createAction<{
  pattern: BookSearchCriteria["pattern"];
}>("setBookSearchPatternAction");

export const setBookSearchSortByAction = createAction<{
  sortBy: BookSearchCriteria["sortBy"];
}>("setBookSearchSortBy");

export const setBookSearchFilterByAction = createAction<{
  filterBy: BookSearchCriteria["filterBy"];
}>("setBookSearchFilterByAction");

export const loadMoreBooksAction = createAction("loadMoreBooksAction");
