import React, { Component } from 'react';
import DateInput from './components/DateInput';
import Photo from './components/Photo.js'

class App extends Component {

  state ={
    date: "",
    photo: "",
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;

    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
    
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=58oXjtN6gnphNMkCExZ8VSyl6effQwda2CppFiYV`)
    .then(response=> response.json())
    .then(json => this.setState({ photo: json}));
  }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=58oXjtN6gnphNMkCExZ8VSyl6effQwda2CppFiYV`)
    .then(response => response.json())
    .then(photoData => this.setState({ photo: photoData}));
  };
  render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <DateInput 
        changeDate={this.changeDate}/>
        <Photo 
        photo={this.state.photo}/>
        </div>
    )
  }
}

export default App;