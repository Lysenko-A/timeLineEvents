import { takeEvery, call, put } from 'redux-saga/effects';
import { LIST_TIME_EVENTS_REQUEST, LIST_TIME_EVENTS_SUCCESS } from '../../containers/TimeEvents/constantsTimeEvents';
import { LIST_TIME_EVENTS_PATH } from '../../constants/endpoint';

import { request } from '../../utils/request';

function* getTimeEvents() {
    const timeEvents = yield call(request('get', LIST_TIME_EVENTS_PATH ));
    yield put({
        type: [LIST_TIME_EVENTS_SUCCESS],
        payload: timeEvents.data.timeEvents
    });
}

export function* watchTimeEvents() {
    yield takeEvery(LIST_TIME_EVENTS_REQUEST, getTimeEvents);
}