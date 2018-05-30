import * as React from 'react';
import './App.css';
import { Link } from 'react-scroll';
import NextArrows from './components/ui/next-arrows/next-arrows';
import SkillChart, { SkillChartProps } from './components/ui/skill-chart/skill-chart';

const logo = require('./assets/splash.jpg');
const profil = require('./assets/profile.jpg');
const exia = require('./assets/exia.png');

class App extends React.Component {
  introRef: HTMLDivElement;
  xpRef: HTMLDivElement;
  studiesRef: HTMLDivElement;
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
          <Link to="app-studies" spy={true} smooth={true} duration={1000} className="arrow-container">
            <NextArrows darkColor={true}/>
          </Link>
        </section>
        <section id="app-studies" className="app-studies" ref={(input: HTMLDivElement) => { this.studiesRef = input; }}>
          <h2>Études</h2>
          <div className="studies-container">
            <div className="studies-header">
              <img src={exia} id="exiaLogo"/>
              <div className="studies-bloc">
                <blockquote>L’exia.CESI forme des ingénieurs professionnels de l’informatique ancrés dans le 
                  monde de l’entreprise.<br /><br />
                  L’école est construite autour d’un parcours en cinq ans 
                  offrant la possibilité aux étudiants de se spécialiser en logiciels
                  ou réseaux et télécoms.<br /><br />
                  La pédagogie de l'exia.Cesi est basé sur la méthode d’apprentissage PBL (Problem-Based Learning).
                  Cette pédagogie active place les étudiants dans des situations réelles d’entreprise.
                </blockquote>
                <a href="https://exia.cesi.fr/ecole-ingenieur-informatique"><i>
                  Plus d'infos sur le site internet de l'exia.CESI
                </i></a>
              </div>
            </div>
            <div className="studies-xp">
              dates: etudes (recap) + stage de fin d'études
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
