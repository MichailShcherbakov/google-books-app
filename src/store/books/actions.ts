import { createAction } from "@reduxjs/toolkit";
import {
  Book,
  BookSelectCriteria,
  CategoryFilterEnum,
  RequestStatusEnum,
  SortByEnum,
} from "./type";

export const setBooksRequestStatusAction = createAction<{
  status: RequestStatusEnum;
}>("setBooksRequestStatusAction");

export const requestBooksAction = createAction<{
  criteria: BookSelectCriteria;
}>("requestBooksAction");

export const setBooksAction = createAction<{
  books: Book[];
  totalCount: number;
}>("setBooksAction");

export const setBooksSortByAction = createAction<{
  sortBy: SortByEnum;
}>("setBooksSortByAction");

export const setBookCategoryFilterAction = createAction<{
  filterBy: CategoryFilterEnum;
}>("setBookCategoryFilterAction");

export const loadMoreBooksAction = createAction("loadMoreBooksAction");
