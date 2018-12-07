import React from 'react'
import {
  DateInput
} from 'semantic-ui-calendar-react'


class DateTimeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: '',
      };
    }
    
    handleChange = (event, {name, value}) => {
       if (this.state.hasOwnProperty(name)) {
         this.setState({ [name]: value });
       }
     }

     render() {
       return (
          <DateInput
            label={this.props.label}
            name="date"
            placeholder="DD-MM-YYYY"
            value={this.state.date}
            iconPosition="left"
            onChange={this.handleChange}
            required={this.props.required} />
       );
     }
   }
export default DateTimeForm;
