import React, { Component } from 'react';
import BuildInfo from './components/BuildInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BuildInfo />
        </header>
      </div>
    );
  }
}

export default App;
