import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, select, takeLatest } from "redux-saga/effects";
import { GoogleBookApi } from "~/api";
import { GetBooksResult } from "~/api/type";
import { RootState } from "..";
import {
  requestBooksAction,
  setBooksAction,
  setBooksRequestStatusAction,
} from "./actions";
import { BookSelectCriteria, RequestStatusEnum } from "./type";

export function* getBooks(
  action: PayloadAction<{
    criteria: BookSelectCriteria;
  }>,
) {
  try {
    const result: GetBooksResult = yield call(
      GoogleBookApi.getBooks,
      action.payload.criteria,
    );

    yield put({
      type: setBooksAction.type,
      payload: { books: result.items, totalCount: result.totalItems },
    });
    yield put({
      type: setBooksRequestStatusAction.type,
      payload: { status: RequestStatusEnum.RECEIVED },
    });
  } catch (error) {
    yield put({
      type: setBooksRequestStatusAction.type,
      payload: { status: RequestStatusEnum.REQUEST_FAILED },
    });
  }
}

export function* loadInitialBooks() {
  const criteria: BookSelectCriteria = yield select(
    (state: RootState) => state.books.criteria,
  );

  yield put({
    type: requestBooksAction.type,
    payload: {
      criteria,
    },
  });
}

// TODO: remove any
export function* watchBooksRequest(): any {
  yield all([
    yield fork(loadInitialBooks),
    yield takeLatest(requestBooksAction.type, getBooks),
  ]);
}
