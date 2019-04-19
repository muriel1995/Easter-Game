import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
import Map from './components/GameBoard/Map/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
