import React, { Component } from 'react';
import logo from './logo.svg';
import BuyingGuide from './components/BuyingGuide/BuyingGuide';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <BuyingGuide />
      </div>
    );
  }
}

export default App;
