import * as React from 'react';
import './App.css';

let logo = require('./splash.jpg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-name">
            Sevket YALCIN
          </div>
          <img src={logo} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
