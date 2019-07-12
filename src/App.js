import React, { Component } from 'react';
import DateInput from "./components/DateInput";
import Photo from "./components/Photo";

class App extends Component {

    state = {
    date: "",
    photo: "",
  };

  ////this is the API fetch
  componentDidMount() {
    fetch (`
    https://api.nasa.gov/planetary/apod?api_key=58oXjtN6gnphNMkCExZ8VSyl6effQwda2CppFiYV`)
    .then(response => response.json())
    .then(json => this.setState({ photo: json}));
  }

  /// this is the change date function
  changeDate = e => {
    e.preventDefault();
    console.log(e.target);

    let dateFromInput = e.target[0].value;

    this.setState({ date: dateFromInput});
  };
  render () {
    return (
      <div>
        <h1>NASA'S Astronomy Picture of the Day</h1>
        <DateInput 
        changeDate={this.changeDate}/>
        <Photo 
        photo={this.state.photo}/>
      </div>
    )
  }
}

export default App;
