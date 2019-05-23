import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

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

class PanelEvent extends PureComponent {
  onSubmit = (values, actions) => {
  };


  render() {
    return (
      <div>
        <Formik
          onSubmit={this.onSubmit}
          validationSchema={validationSchema}
          render={props => {
            const { handleSubmit, handleBlur, values, errors } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    onChange={handleSubmit}
                    onBlur={handleBlur}
                    value={values.title}
                    name="title"
                  />
                  {errors.title && <div id="feedback">{errors.title}</div>}
                </div>
                <div>
                  <input
                    type="number"
                    onChange={handleSubmit}
                    onBlur={handleBlur}
                    value={values.startTime}
                    name="startTime"
                  />
                  {errors.startTime && <div id="feedback">{errors.startTime}</div>}
                </div>
                <div>
                  <input
                    type="number"
                    onChange={handleSubmit}
                    onBlur={handleBlur}
                    value={values.endTime}
                    name="endTime"
                  />
                  {errors.endTime && <div id="feedback">{errors.endTime}</div>}
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

export default PanelEvent;