import React, { Component } from 'react';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Map from './components/GameBoard/Map/Map'
import './App.css';
import Pill from "./components/GameBoard/Pill/Pill"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Map />
        <Pill />
        
        <Footer />
      </div>
    );
  }
}

export default App;
