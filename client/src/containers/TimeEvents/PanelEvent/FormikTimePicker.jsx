import React, { PureComponent } from 'react';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';


class FormikTimePicker extends PureComponent {
  handleChange = value => {
    const {
      form: { setFieldValue },
      field: { name },
    } = this.props;
    setFieldValue(name, value);
  };

  validation = () => {
    const {
      form: { setFieldTouched },
      field: { name }
    } = this.props;
    setFieldTouched(name);
  };

  render() {
    const { field: {name, value}, form: { errors } } = this.props;
    return (
      <>
        <TimePicker
        value={value}
        placeholder="choice time"
        showSecond={false}
        minuteStep={30}
        onClose={this.validation}
        onChange={this.handleChange}
      />
        {errors && errors[name] && <div className="error">{errors[name]}</div>}
      </>
    );
  }
}

export default FormikTimePicker;