import { persistStore } from "redux-persist";
import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

import { RootState } from "./types";
import persistReducers from "./persistReducer";

const sagaMiddleware = createSagaMiddleware();

const store: Store<RootState> = createStore(
    persistReducers(rootReducer),
    applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
