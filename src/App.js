import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './components/GameBoard/Gameboard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Gameboard />
      </div>
    );
  }
}

export default App;
