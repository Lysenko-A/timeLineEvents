import { takeEvery, call, put } from 'redux-saga/effects';
import {
  CREATE_TIME_EVENTS_REQUEST,
  CREATE_TIME_EVENTS_SUCCESS, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS,
  LIST_TIME_EVENTS_REQUEST,
  LIST_TIME_EVENTS_SUCCESS,
} from '../../containers/TimeEvents/constantsTimeEvents';
import { LIST_TIME_EVENTS_PATH } from '../../constants/endpoint';

import { request } from '../../utils/request';

function* getTimeEvents() {
    const timeEvents = yield call(request('get', LIST_TIME_EVENTS_PATH ));
    yield put({
        type: LIST_TIME_EVENTS_SUCCESS,
        payload: timeEvents.data.timeEvents
    });
}

function* addTimeEvent(values) {
  const {payload, onSuccess} = values;
  const event = yield call(request('post', LIST_TIME_EVENTS_PATH, payload));
  const { success, res } = event;

  if (success) {
    yield put({
      type: CREATE_TIME_EVENTS_SUCCESS,
      payload: res
    });

    if (onSuccess) {
      onSuccess();
    }
  }
}

function* deleteTimeEvent(request) {
  const {id, onSuccess} = request;
  const event = yield call(request('delete', `${LIST_TIME_EVENTS_PATH}/${id}`));
  const { success, res } = event;
  if (success) {
    yield put({
      type: DELETE_EVENT_SUCCESS,
      payload: res
    });

    if (onSuccess) {
      onSuccess();
    }
  }
}

export function* watchTimeEvents() {
    yield takeEvery(LIST_TIME_EVENTS_REQUEST, getTimeEvents);
    yield takeEvery(CREATE_TIME_EVENTS_REQUEST, addTimeEvent);
    yield takeEvery(DELETE_EVENT_REQUEST, deleteTimeEvent);
}