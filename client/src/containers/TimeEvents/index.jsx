import {connect} from 'react-redux';
import TimeEvents from './TimeEvents';
import {getListTimeEventsAction} from './actionTimeEvents';

// const mapStateToProps = (state) => {
//     const {timeEvents} = state.timeEvents;
//     return {timeEvents};
// };

export default connect(
    // null,
    (state) => ({
        timeLine: state.timeEvents
    }),
    { getListTimeEvents: getListTimeEventsAction }
)(TimeEvents);