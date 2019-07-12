import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateInput = props => (
   <form onSubmit={props.changeDage}>
       Enter a Date (YYYY-MM-DDD):
       <input />
       <input type="submit" />
   </form>
);


export default DateInput;