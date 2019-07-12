import React, { Component } from 'react';
import moment from 'moment';
import DateInput from "./components/DateInput";
import Photo from "./components/Photo";

class App extends Component {

    state = {
    date:'',
    photo: "",
  };

  
  /// Not sure why moment isn't working
  // formatDate = moment => {
  //   let year = moment.year();
  //   let month = moment.month() + 1;
  //   let day = moment.day();
  //   return `${year}-${month}-${day}`;
  // }

  /// sets state of the photo to the selected date inputed into the form
  getPhoto = date => {
    fetch(`
    https://api.nasa.gov/planetary/apod?date=${date}&api_key=58oXjtN6gnphNMkCExZ8VSyl6effQwda2CppFiYV`)
    .then(response => response.json())
    .then(photoData => this.setState({ photo: photoData }));
  };

  ////this is the API fetch
  componentDidMount() {
    fetch (`
    https://api.nasa.gov/planetary/apod?api_key=58oXjtN6gnphNMkCExZ8VSyl6effQwda2CppFiYV`)
    .then(response => response.json())
    .then(json => this.setState({ photo: json}));
  }

  /// this is the change date function
  changeDate = dateFromInput => {
    this.setState({ date: dateFromInput});
    this.getPhoto(dateFromInput);
  };


  render () {
    return (
      <div>
        <h1>NASA'S Astronomy Picture of the Day</h1>
        <DateInput 
        changeDate={this.changeDate}
        date={this.state.date}/>
        <Photo 
        photo={this.state.photo}/>
      </div>
    )
  }
}

export default App;
