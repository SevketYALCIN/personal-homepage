import * as React from 'react';
import './App.css';
import { Link } from 'react-scroll';
import NextArrows from './components/ui/next-arrows/next-arrows';

let logo = require('./splash.jpg');

class App extends React.Component {
  introRef: HTMLDivElement;

  goToIntro = () => {
      window.scrollTo(0, this.introRef.offsetTop - 1);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="app-header-name">
            <div className="name">Sevket YALCIN</div>
            <div className="job">Developpeur Web</div>
          </div>
          <img src={logo} />
          <Link to="app-intro" spy={true} smooth={true} duration={1000} className="arrow-container">
            <NextArrows />
          </Link>
        </header>
        <div id="app-intro" className="app-intro" ref={(input: HTMLDivElement) => { this.introRef = input; }}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </div>
      </div>
    );
  }
}

export default App;
