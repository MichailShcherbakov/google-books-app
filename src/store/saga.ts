import { all, spawn, call } from "redux-saga/effects";

// TODO: remove any
export function* rootSaga(): any {
  const watchers: any = [];

  const retrySagas = yield watchers.map((watcher: any) =>
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
