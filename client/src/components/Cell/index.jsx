import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ events }) => {
  return <div className="table-cell">
    {events && events.map(event => (
      <div key={event.id} className="table-cell-inner">
        {event.title}
      </div>
    ))}
  </div>;
};

Cell.propTypes = {
  events: PropTypes.array,
};


export default Cell;