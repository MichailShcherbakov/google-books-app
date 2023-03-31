import { configureStore, Store, Middleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware, { END, Task } from "redux-saga";
import { booksReducer } from "./books";
import { rootSaga } from "./saga";

export interface StoreWithSaga extends Store {
  sagaTask?: Task;
}

export const makeStore = (options: { reduxWrapperMiddleware: Middleware }) => {
  const { reduxWrapperMiddleware } = options;

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      books: booksReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(sagaMiddleware)
        .concat(reduxWrapperMiddleware),
  });

  (store as StoreWithSaga).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export async function getRunningQueries(store: Store) {
  store.dispatch(END);

  await (store as StoreWithSaga).sagaTask?.toPromise();
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

const filterActions = [END.type];

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: false,
  serialize: actions =>
    actions.filter(action => !filterActions.includes(action.type)),
});
