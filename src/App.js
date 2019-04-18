import React, { Component } from 'react';
import './App.css';
import Square from './components/Square'

class App extends Component {
  comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!'
  };
  render() {
    return (
      <div className="App">
        <div className="satir">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
        <div className="satir">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
        <div className="satir">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
      </div>
    );
  }
}

export default App;
