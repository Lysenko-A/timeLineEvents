import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import { createTimeLine } from '../../utils/utils';

const Table = ({ times, deleteEvent }) => {
  const timeLine = createTimeLine(9, 17);

  return (
    <table className="table-events">
      <thead>
      <tr>
        <td>Time</td>
        <td>Day</td>
      </tr>
      </thead>
      <tbody>
      {
          timeLine && timeLine.map(time => (
          <tr key={time}>
            <td>{time.replace("-", ":")}</td>
            <td className="table-cell">
              <Cell events={times[time] && times[time].events} deleteEvent={deleteEvent}/></td>
          </tr>

        ))
      }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  times: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  deleteEvent: PropTypes.func
};

export default Table;