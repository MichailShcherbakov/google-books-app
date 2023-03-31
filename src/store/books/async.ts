import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { GoogleBookApi } from "~/api";
import {
  GetBookResult,
  GetBookResultFail,
  GetBooksResult,
  GetBooksResultFail,
} from "~/api/type";
import { RootState } from "..";
import {
  appendBooksAction,
  requestBookAction,
  requestBooksAction,
  RequestBooksActionOptions,
  setBookRequestStatusAction,
  setBooksAction,
  setCurrentBookAction,
} from "./actions";
import { BookSearchCriteria, RequestStatusEnum } from "./type";

export function* getBooks(action: PayloadAction<RequestBooksActionOptions>) {
  try {
    const criteria: BookSearchCriteria = yield select(
      (state: RootState) => state.books.criteria,
    );

    const result: GetBooksResult | GetBooksResultFail = yield call(
      GoogleBookApi.getBooks,
      criteria,
    );

    if (result.error) {
      yield put({
        type: setBookRequestStatusAction.type,
        payload: { status: RequestStatusEnum.REQUEST_FAILED },
      });

      return;
    }

    if (action.payload?.loadMore) {
      /// we don't use the new total items due to the fact that it is not valid
      // thanks Google Book API -_-
      yield put({
        type: appendBooksAction.type,
        payload: { books: result.items },
      });
    } else {
      yield put({
        type: setBooksAction.type,
        payload: { books: result.items, totalCount: result.totalItems },
      });
    }

    yield put({
      type: setBookRequestStatusAction.type,
      payload: { status: RequestStatusEnum.RECEIVED },
    });
  } catch (error) {
    console.error(error);

    yield put({
      type: setBookRequestStatusAction.type,
      payload: { status: RequestStatusEnum.REQUEST_FAILED },
    });
  }
}

export function* getBook(action: PayloadAction<{ bookId: string }>) {
  try {
    const result: GetBookResult | GetBookResultFail = yield call(
      GoogleBookApi.getBook,
      action.payload.bookId,
    );

    if (result.error) {
      yield put({
        type: setBookRequestStatusAction.type,
        payload: { status: RequestStatusEnum.REQUEST_FAILED },
      });

      return;
    }

    yield put({
      type: setCurrentBookAction.type,
      payload: { book: result },
    });

    yield put({
      type: setBookRequestStatusAction.type,
      payload: { status: RequestStatusEnum.RECEIVED },
    });
  } catch (error) {
    console.error(error);

    yield put({
      type: setBookRequestStatusAction.type,
      payload: { status: RequestStatusEnum.REQUEST_FAILED },
    });
  }
}

export function* watchBooksRequest() {
  yield all([
    takeLatest(requestBooksAction.type, getBooks),
    takeLatest(requestBookAction.type, getBook),
  ]);
}
