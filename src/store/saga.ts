import { all, call } from "redux-saga/effects";
import { watchBooksRequest } from "./books/async";

export function* rootSaga() {
  yield all([call(watchBooksRequest)]);
}
