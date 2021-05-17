import {createStore, applyMiddleware} from "redux";

import reducer from "./root.reducer";

import createSagaMiddleware from "redux-saga";

import userSaga from "./sagas";

import logger from "redux-logger";


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware,logger];

export const store = createStore(reducer,applyMiddleware(...middlewares));

sagaMiddleware.run(userSaga);