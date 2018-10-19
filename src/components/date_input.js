import React from 'react'
import { Form } from 'semantic-ui-react'
import {
    DateInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';


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
         <Form>
           <DateInput
          name="date"
          placeholder="Date"
          value={this.state.date}
          iconPosition="left"
          onChange={this.handleChange} />
         </Form>
       );
     }
   }
export default DateTimeForm;
