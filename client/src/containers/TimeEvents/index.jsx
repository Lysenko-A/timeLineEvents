import {connect} from 'react-redux';
import TimeEvents from './TimeEvents';
import { deleteEventAction, getListTimeEventsAction } from './actionTimeEvents';

export default connect(
    // null,
    (state) => ({
        timeLine: state.timeEvents
    }),
    {
      getListTimeEvents: getListTimeEventsAction,
      deleteEvent: deleteEventAction,
    },
)(TimeEvents);

