import * as React from 'react';
import './App.css';
import { Link } from 'react-scroll';
import NextArrows from './components/ui/next-arrows/next-arrows';
import SkillChart, { SkillChartProps } from './components/ui/skill-chart/skill-chart';

let logo = require('./splash.jpg');
let profil = require('./profile.jpg');

class App extends React.Component {
  introRef: HTMLDivElement;
  xpRef: HTMLDivElement;
  introText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus,
  est id accumsan feugiat, lacus nisl lobortis ipsum, id tristique turpis turpis et orci.`;
  introDescription: string = `Suspendisse
  cursus eros vitae gravida molestie. Quisque bibendum, urna sed luctus tempus, metus purus bibendum
  nibh, vitae aliquet odio libero nec velit.`;

  skills: Array<SkillChartProps> = [
    {
      percentage: 70,
      title: 'React'
    },
    {
      percentage: 75,
      title: 'C# / ASP.NET Core'
    },
    {
      percentage: 40,
      title: 'Angular'
    },
    {
      percentage: 80,
      title: 'SQL'
    },
    {
      percentage: 80,
      title: 'ALM'
    },
    {
      percentage: 50,
      title: 'Azure / AWS'
    }
  ];

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="app-header-name">
            <h1 className="name">Sevket YALCIN</h1>
            <div className="job">Developpeur Web</div>
          </div>
          <img src={logo} />
          <Link to="app-intro" spy={true} smooth={true} duration={1000} className="arrow-container">
            <NextArrows darkColor={false}/>
          </Link>
        </header>
        <section id="app-intro" className="app-intro" ref={(input: HTMLDivElement) => { this.introRef = input; }}>
          <h2 className="intro-title">À propos de moi</h2>
          <div className="intro-text-container">
            <div className="intro-text">
              <span>
                {this.introText} <br /><br />
                {this.introDescription} <br /><br />
                {this.introDescription}
              </span>
              <img src={profil}/>
            </div>
          </div>
          <Link to="app-xp" spy={true} smooth={true} duration={1000} className="arrow-container">
            <NextArrows darkColor={false}/>
          </Link>
        </section>
        <section id="app-xp" className="app-xp" ref={(input: HTMLDivElement) => { this.xpRef = input; }}>
          <h2>Connaissances</h2>
          <div className="xp-container">
            {
              this.skills.map((item) => {
                return <SkillChart 
                  key={`skill-${item.title}`} 
                  title={item.title} 
                  percentage={item.percentage}
                />;
              })
            }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
