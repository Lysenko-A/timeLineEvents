import {
  LIST_TIME_EVENTS_SUCCESS,
} from './constantsTimeEvents';
import { convertDateTimeEvents } from '../../utils/utils';

const initialState = {
  timeEvents: [
    {
      time: '9-30',
      id: 1,
      events: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat',
          id: 1,
          startTime: 34200,
          endTime: 36000,
        },
      ],
    },
    {
      time: '11-30',
      id: 3,
      events: [
        {
          title: 'rr2',
          id: 1,
          startTime: 41400,
          endTime: 43200,
        },
      ],
    },
    {
      time: '15',
      id: 4,
      events: [
        {
          title: 'rr3',
          id: 1,
          startTime: 54000,
          endTime: 57600,
        },
      ],
    },
  ],
};


export default function timeEventsReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_TIME_EVENTS_SUCCESS:
      return {
        ...state,
        timeEvents: convertDateTimeEvents(action.payload, 9, 17),
      };
    default:
      return state;
  }
}
