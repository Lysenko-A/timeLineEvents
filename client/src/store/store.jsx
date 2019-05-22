import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { watchTimeEvents } from '../sagas/timeEvents/timeEvents';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
  yield all([watchTimeEvents()]);
}

sagaMiddleware.run(rootSaga);
