import * as React from 'react';
import './App.css';
import { Link, scrollSpy } from 'react-scroll';
import NextArrows from './components/ui/next-arrows/next-arrows';
import SkillChart, { SkillChartProps } from './components/ui/skill-chart/skill-chart';

const logo = require('./assets/splash.jpg');
const profil = require('./assets/profile.jpg');
const exia = require('./assets/exia.png');

class App extends React.Component<AppProps, AppState> {
  introRef: HTMLDivElement;
  xpRef: HTMLDivElement;
  studiesRef: HTMLDivElement;
  proRef: HTMLDivElement;
  contactRef: HTMLDivElement;
  headerRef: HTMLDivElement;
  appRef: HTMLDivElement;
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

  constructor(props: AppProps) {
    super(props);
    this.state = {
      navbar: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop >= this.headerRef.clientHeight) {
        this.setState({navbar: true});
      } else {
        this.setState({navbar: false});
      }
    // tslint:disable-next-line:align
    }, true);
  
    scrollSpy.update();
  }

  render() {
    return (
      <div className="app" ref={(input: HTMLDivElement) => { this.appRef = input; }}>
        <div className={`app-navbar ${this.state.navbar ? 'is-active' : ''} `}>
          <div className="nav-tab-container">
              <Link to="app-header" spy={true} smooth={true} duration={1000}>
                <div className="nav-tab">
                    Home
                </div>
              </Link>
              <Link to="app-intro" spy={true} smooth={true} duration={1000}offset={48} isDynamic={true}>
                <div className="nav-tab">
                    Intro
                </div>
              </Link>
              <Link to="app-xp" spy={true} smooth={true} duration={1000}offset={48}>
                <div className="nav-tab">
                    Connaissances
                </div>
              </Link>
              <Link to="app-studies" spy={true} smooth={true} duration={1000}offset={48}>
                <div className="nav-tab">
                    Études
                </div>
              </Link>
              <Link to="app-pro" spy={true} smooth={true} duration={1000}offset={48}>
                <div className="nav-tab">
                    Expérience
                </div>
              </Link>
              <Link to="app-contact" spy={true} smooth={true} duration={1000}offset={48}>
                <div className="nav-tab">
                    Contact
                </div>
              </Link>
          </div>
        </div>
        <div className="app-header" id="app-header" ref={(input: HTMLDivElement) => { this.headerRef = input; }}>
          <div className="app-header-name">
            <h1 className="name">Sevket YALCIN</h1>
            <div className="job">Developpeur Web</div>
          </div>
          <img src={logo} />
          <Link to="app-intro" spy={true} smooth={true} duration={1000} className="arrow-container"offset={48} isDynamic={true}>
            <NextArrows darkColor={false}/>
          </Link>
        </div>
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
          <Link to="app-xp" spy={true} smooth={true} duration={1000} className="arrow-container"offset={48}>
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
          <Link to="app-studies" spy={true} smooth={true} duration={1000} className="arrow-container"offset={48}>
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
                  La pédagogie de l'exia.Cesi est basé sur la méthode d’apprentissage PBL (Problem-Based Learning).
                  Cette pédagogie active place les étudiants dans des situations réelles d’entreprise.
                </blockquote>
                <a target="blank" href="https://exia.cesi.fr/ecole-ingenieur-informatique"><i>
                  Plus d'infos sur le site internet de l'exia.CESI
                </i></a>
              </div>
            </div>
            <div className="studies-xp">
              <div className="xp-bloc">
                <span className="xp-date">Sept. 2010 - Juil. 2015</span> 
                <span className="xp-text">
                  <div className="xp-title">Exia, dominante software development</div>
                  <div><br />
                    Apprentissage d'un bon nombre de languages de programmation,
                    de base de données, de techniques de conception de systèmes 
                    accompagné de projets d'équipe pour une mise en situation d'entreprise.<br /><br />
                    La 5ème année était plus axée vers le management de projet (méthodologies, outils) tout en 
                    menant un projet fil rouge (concours Nokia), un projet d'entrepreunariat (site de jeu en ligne),
                    ainsi que la préparation de mon mémoire et de sa présentation (l'implantation de technologie 
                    NFC chez l'humain).
                  </div>
                </span> 
              </div>
            </div>
          </div>
          <Link to="app-pro" spy={true} smooth={true} duration={1000} className="arrow-container"offset={48}>
            <NextArrows darkColor={false}/>
          </Link>
        </section>
        <section id="app-pro" className="app-pro" ref={(input: HTMLDivElement) => { this.proRef = input; }}>
          <h2>Expérience professionnelle</h2>
          <div className="pro-container">
            <div className="pro-bloc">
              <span className="pro-date">Janv. 2018 - Janv. 2019</span> 
              <span className="pro-text">
                Forcia
              </span>
            </div>
            <div className="pro-bloc">
              <span className="pro-date">Sept. 2015 - Janv. 2018</span> 
              <span className="pro-text">
                IS
              </span>
            </div>
            <div className="pro-bloc">
              <span className="pro-date">Janv. 2015 - Juil. 2015</span> 
              <span className="pro-text">
                Stage
              </span>
            </div>
          </div>
          <Link to="app-contact" spy={true} smooth={true} duration={1000} className="arrow-container"offset={48}>
            <NextArrows darkColor={true}/>
          </Link>
        </section>
        <section id="app-contact" className="app-contact" ref={(input: HTMLDivElement) => { this.contactRef = input; }}>
          <h2>Contact</h2>
          <div className="contact-container">
            Contact info phrase
          </div>
        </section>
      </div>
    );
  }
}

export default App;

interface AppProps {
  isMobile: boolean;
}

interface AppState {
  navbar: boolean;
}