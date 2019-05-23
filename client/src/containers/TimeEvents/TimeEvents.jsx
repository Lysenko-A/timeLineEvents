import React, { PureComponent } from 'react';
import Table from '../../components/Table';
import PanelEvent from './PanelEvent';

class TimeEvents extends PureComponent {

  componentWillMount() {
    this.props.getListTimeEvents();
  }

  renderTime = () => {
    const { timeLine } = this.props;

    return <Table times={timeLine.timeLine}/>;
  };


  render() {
    return (
      <div>
        <PanelEvent/>
        {this.renderTime()}
      </div>
    );
  }
}

export default TimeEvents;