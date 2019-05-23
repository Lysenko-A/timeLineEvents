import {
  LIST_TIME_EVENTS_SUCCESS,
} from './constantsTimeEvents';
import { createTimeLine } from '../../utils/utils';

const initialState = {
  timeLine: [],
};

function convertDateTimeEvents(date, startTime, endTime) {
  let timeLine = createTimeLine(startTime, endTime);

  const newTime = {};
  date && date.forEach(time => {
    newTime[time.time] = time;
  });

  timeLine.forEach(time => {
    if (!newTime[time]) {
      newTime[time] = {};
    }
  });

  return newTime;
}

export default function timeEventsReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_TIME_EVENTS_SUCCESS:
      return {
        ...state,
        timeLine: convertDateTimeEvents(action.payload, 9, 17),
      };
    default:
      return state;
  }
}
