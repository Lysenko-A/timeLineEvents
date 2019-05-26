import React, { PureComponent } from 'react';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import FormikTimePicker from './FormikTimePicker';
import { connect } from 'react-redux';
import { addTimeEventAction, getListTimeEventsAction } from '../actionTimeEvents';

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required(),
  startTime: yup
    .string()
    .required(),
  endTime: yup
    .string()
    .required(),
});

function validateTime(value) {
  let error;
  let time = +value.format('HHmm');

  if (time < 899) {
    error = 'min time 9:00';
  } else if (time > 1631) {
    error = 'max time 16:30';
  }
  return error;
}

class PanelEvent extends PureComponent {
  onSubmit = (values, { setSubmitting, setFieldError }) => {
    const { addTimeEvent, getListTimeEvents } = this.props;
    const { title, startTime, endTime } = values;
    const duration = endTime.diff(startTime);
    const newEventTime = {
      time:  startTime.format('HH-mm'),
      event: [
        {
          title,
          startTime: startTime.format('HH:mm'),
          duration,
        }
      ]
    };

    if(Math.sign(duration) === -1) {
      setFieldError('endTime', 'end time must be longer than start time');
    }

    addTimeEvent(newEventTime, getListTimeEvents);
    setSubmitting(false);
  };

  render() {
    return (
      <div>
        <Formik
          onSubmit={this.onSubmit}
          initialValues={{ title: '' }}
          validationSchema={validationSchema}
          render={props => {
            const { handleSubmit, errors, handleChange, handleBlur, values } = props;
            return (
              <form onSubmit={handleSubmit}  className="form">
                <div>
                  <input
                    type="text"
                    placeholder="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    name="title"
                  />
                  {errors.title && <div className="error">{errors.title}</div>}
                </div>
                <div>
                  <Field
                    name="startTime"
                    validate={validateTime}
                    component={FormikTimePicker}
                  />
                </div>
                <div>
                  <Field
                    name="endTime"
                    validate={validateTime}
                    component={FormikTimePicker}
                  />
                </div>
                <button type="submit">Add event</button>
              </form>
            );
          }}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {
    getListTimeEvents: getListTimeEventsAction,
    addTimeEvent: addTimeEventAction
  },
)(PanelEvent);