import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import { createTimeLine } from '../../utils/utils';

const Table = ({ times }) => {
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
            <td><Cell events={times[time] && times[time].events}/></td>
          </tr>

        ))
      }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  times: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Table;