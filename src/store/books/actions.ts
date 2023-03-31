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

export const requestBookAction = createAction<{
  bookId: string;
}>("requestBookAction");

export const setCurrentBookAction = createAction<{
  book: Book;
}>("setCurrentBookAction");

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
