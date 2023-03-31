import { createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { BookState } from ".";
import { Book, BookSearchCriteria, RequestStatusEnum } from "./type";

/**
 * @private
 */
export const setBookRequestStatusAction = createAction<{
  status: RequestStatusEnum;
}>("setBookRequestStatusAction");

/**
 * @private
 */
export const hydrateAction = createAction<{ books: BookState }>(HYDRATE);

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

export const setBookSearchCriteriaAction = createAction<{
  criteria: Partial<BookSearchCriteria>;
}>("setBookSearchCriteriaAction");
