import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { GoogleBookApi } from "~/api";
import { GetBooksResult } from "~/api/type";
import { RootState } from "..";
import {
  appendBooksAction,
  requestBooksAction,
  RequestBooksActionOptions,
  setBookRequestStatusAction,
  setBooksAction,
} from "./actions";
import { BookSearchCriteria, RequestStatusEnum } from "./type";

export function* getBooks(action: PayloadAction<RequestBooksActionOptions>) {
  try {
    const criteria: BookSearchCriteria = yield select(
      (state: RootState) => state.books.criteria,
    );

    const result: GetBooksResult = yield call(GoogleBookApi.getBooks, criteria);

    // TODO: check it
    /* if (result.error) {
      
    } */

    if (action.payload?.loadMore) {
      /// we don't use the new total items due to the fact that it is not valid -_-
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
    console.log(error);
    yield put({
      type: setBookRequestStatusAction.type,
      payload: { status: RequestStatusEnum.REQUEST_FAILED },
    });
  }
}

// TODO: remove any
export function* watchBooksRequest(): any {
  yield takeLatest(requestBooksAction.type, getBooks);
}
