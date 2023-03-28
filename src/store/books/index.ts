import { createSlice } from "@reduxjs/toolkit";
import {
  loadMoreBooksAction,
  requestBooksAction,
  setBookCategoryFilterAction,
  setBooksAction,
  setBooksRequestStatusAction,
  setBooksSortByAction,
} from "./actions";
import {
  Book,
  BookSelectCriteria,
  CategoryFilterEnum,
  RequestStatusEnum,
  SortByEnum,
} from "./type";

export type BookState = {
  all: Record<Book["id"], Book>;
  totalCount: number;
  criteria: BookSelectCriteria;
  status: RequestStatusEnum;
};

const initialState: BookState = {
  all: {},
  totalCount: 0,
  criteria: {
    pattern: "",
    filterBy: CategoryFilterEnum.ALL,
    sortBy: SortByEnum.RELEVANCE,
    startIndex: 0,
    maxResults: 30,
  },
  status: RequestStatusEnum.IDLE,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setBooksAction, (state, action) => {
        state.totalCount = action.payload.totalCount;

        const bookMap = action.payload.books.reduce<Record<Book["id"], Book>>(
          (all, hotel) => {
            all[hotel.id] = hotel;
            return all;
          },
          {},
        );

        state.all = {
          ...state.all,
          ...bookMap,
        };
      })
      .addCase(setBooksRequestStatusAction, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(requestBooksAction, (state, action) => {
        state.criteria = action.payload.criteria;
        state.status = RequestStatusEnum.RECEIVED;
      })
      .addCase(setBooksSortByAction, (state, action) => {
        state.criteria.sortBy = action.payload.sortBy;
        state.status = RequestStatusEnum.REQUESTED;
      })
      .addCase(setBookCategoryFilterAction, (state, action) => {
        state.criteria.filterBy = action.payload.filterBy;
        state.status = RequestStatusEnum.REQUESTED;
      })
      .addCase(loadMoreBooksAction, state => {
        state.criteria.startIndex += state.criteria.maxResults; // using like a pagination step
        state.status = RequestStatusEnum.REQUESTED;
      });
  },
});

export const booksReducer = bookSlice.reducer;
