import { createSlice } from "@reduxjs/toolkit";
import {
  appendBooksAction,
  requestBookAction,
  requestBooksAction,
  setBookRequestStatusAction,
  setBooksAction,
  setBookSearchCriteriaAction,
  setCurrentBookAction,
} from "./actions";
import {
  Book,
  BookSearchCriteria,
  CategoryFilterEnum,
  RequestStatusEnum,
  SortByEnum,
} from "./type";

export type BookState = {
  all: Array<Book>;
  totalCount: number;
  criteria: BookSearchCriteria;
  status: RequestStatusEnum;
  currentBook: Book | null;
};

const initialState: BookState = {
  all: [],
  totalCount: 0,
  criteria: {
    pattern: "",
    filterBy: CategoryFilterEnum.ALL,
    sortBy: SortByEnum.RELEVANCE,
    startIndex: 0,
    pageSize: 30,
  },
  status: RequestStatusEnum.IDLE,
  currentBook: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setBooksAction, (state, action) => {
        state.totalCount = action.payload.totalCount;
        state.all = action.payload.books ?? [];
      })
      .addCase(appendBooksAction, (state, action) => {
        state.all.push(...action.payload.books);
      })
      .addCase(setBookRequestStatusAction, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(requestBooksAction, (state, action) => {
        if (action.payload?.loadMore) {
          if (
            state.criteria.startIndex + state.criteria.pageSize >
            state.totalCount
          ) {
            return;
          }

          state.criteria.startIndex += state.criteria.pageSize;

          state.status = RequestStatusEnum.REQUESTED_MORE;
        } else {
          state.criteria.startIndex = 0;
          state.status = RequestStatusEnum.REQUESTED;
        }
      })
      .addCase(requestBookAction, state => {
        state.status = RequestStatusEnum.REQUESTED;
      })
      .addCase(setCurrentBookAction, (state, action) => {
        state.currentBook = action.payload.book;
      })
      .addCase(setBookSearchCriteriaAction, (state, action) => {
        state.criteria = {
          ...state.criteria,
          ...action.payload.criteria,
        };
      });
  },
});

export const booksReducer = bookSlice.reducer;
