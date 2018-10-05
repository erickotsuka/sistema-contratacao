import React from 'react'
import { Form } from 'semantic-ui-react'
import {
    DateInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';


class DateTimeFormInline extends React.Component {
    handleChange = (event, {name, value}) => {
       if (this.state.hasOwnProperty(name)) {
         this.setState({ [name]: value });
       }
     }

     render() {
       return (
         <Form>
           <DateInput
             inline
             name="date"
             value={this.state.date}
             onChange={this.handleDateChange} />
         </Form>
       );
     }
   }
export default DateTimeFormInline
