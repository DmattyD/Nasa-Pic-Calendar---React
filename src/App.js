import React, { Component } from 'react';
import DateInput from "./components/DateInput";
import Photo from "./components/Photo";

class App extends Component {

    state = {
    date: "",
    photo: "",
  };

  /// this is the change date function
  changeDate = e => {
    e.preventDefault();
    console.log(e.target);
  };
  render () {
    return (
      <div>
        <h1>NASA'S Astronomy Picture of the Day</h1>
        <DateInput 
        changeDate={this.changeDate}/>
        <Photo />
      </div>
    )
  }
}

export default App;
