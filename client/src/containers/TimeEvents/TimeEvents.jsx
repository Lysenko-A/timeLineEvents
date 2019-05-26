import React, { PureComponent } from 'react';
import Table from '../../components/Table';
import PanelEvent from './PanelEvent';

class TimeEvents extends PureComponent {

  componentWillMount() {
    this.props.getListTimeEvents();
  };

  handlerDeleteEvent = id => {
    const { deleteEvent, getListTimeEvents} = this.props;
    deleteEvent(id, getListTimeEvents);
  };

  renderTime = () => {
    const { timeLine } = this.props;
    return <Table times={timeLine.timeLine} deleteEvent={this.handlerDeleteEvent}/>;
  };


  render() {

    return (
      <div className="container">
        <PanelEvent/>
        {this.renderTime()}
      </div>
    );
  }
}

export default TimeEvents;