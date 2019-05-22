import React, { PureComponent } from 'react';
import Table from '../../components/Table';
import { convertDateTimeEvents } from '../../utils/utils';

class TimeEvents extends PureComponent {

  componentWillMount() {
    this.props.getListTimeEvents();
  }

  renderTime = () => {
    const { timeEvents } = this.props;
    const data = convertDateTimeEvents(timeEvents.timeEvents.timeEvents, 9, 17);

    return <Table times={data}/>;
  };


  render() {
    return (
      <div>
        {this.renderTime()}
      </div>
    );
  }
}

export default TimeEvents;