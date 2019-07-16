import React, { Component } from 'react';
import DateInput from './components/DateInput';
import Photo from './components/Photo.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <DateInput />
        <Photo />
        </div>
    )
  }
}

export default App;