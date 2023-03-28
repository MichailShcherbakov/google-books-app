import { all, spawn, call } from "redux-saga/effects";
import { watchBooksRequest } from "./books/async";

// TODO: remove any
export function* rootSaga(): any {
  const watchers = [watchBooksRequest];

  const retrySagas = yield watchers.map(watcher =>
    spawn(function* () {
      while (true) {
        try {
          yield call(watcher);
        } catch (e) {
          console.error(e);
        }
      }
    }),
  );

  yield all(retrySagas);
}
