import { combineReducers } from 'redux';

import timeEventsReducer from '../containers/TimeEvents/reducerTimeEvent';

export default combineReducers({
  timeEvents: timeEventsReducer,
});
