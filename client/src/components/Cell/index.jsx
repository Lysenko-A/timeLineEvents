import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { toHoursOrMinutes } from '../../utils/utils';


const Cell = ({ events, deleteEvent }) => {
  return <div className="table-cell-inner">
    {events && events.map(event => (
      <div key={event._id} className={cx(`table-cell-item time-duration-${toHoursOrMinutes(event.duration)}`)}>
        <span>{event.title}</span>
        <button type="button" onClick={() => deleteEvent(event._id)}>
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 448 512">
            <path fill="currentColor"
                  d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
          </svg>
        </button>
      </div>
    ))}
  </div>;
};

Cell.propTypes = {
  events: PropTypes.array,
  deleteEvent: PropTypes.func,
};


export default Cell;