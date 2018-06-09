import * as React from 'react';
import './App.css';
import { Link, scrollSpy } from 'react-scroll';
import NextArrows from './components/ui/next-arrows/next-arrows';
import SkillChart, { SkillChartProps } from './components/ui/skill-chart/skill-chart';
import SectionBlock from './components/section-block/section-block';

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
      navbar: false,
      contactBody: '',
      contactMail: '',
      contactName: '',
      contactSubject: ''
    };
  }

  handleInputChange = (event: MyFormEvent<HTMLElement>) => {
    const target = event.target;
    let value = '';
    let name = '';
    if (target) {
      value = target.value;
      name = target.name;
    }

    switch (name) {
      case 'contactMail':
        this.setState((current) => ({ ...current, contactMail: value }));
        break;
      case 'contactName':
        this.setState((current) => ({ ...current, contactName: value }));
        break;
      case 'contactBody':
        this.setState((current) => ({ ...current, contactBody: value }));
        break;
      case 'contactSubject':
        this.setState((current) => ({ ...current, contactSubject: value }));
        break;
      default:
        break;
    }
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
              <Link to="app-intro" spy={true} smooth={true} duration={1000}  isDynamic={true}>
                <div className="nav-tab">
                    Intro
                </div>
              </Link>
              <Link to="app-xp" spy={true} smooth={true} duration={1000} >
                <div className="nav-tab">
                    Connaissances
                </div>
              </Link>
              <Link to="app-studies" spy={true} smooth={true} duration={1000} >
                <div className="nav-tab">
                    Études
                </div>
              </Link>
              <Link to="app-pro" spy={true} smooth={true} duration={1000} >
                <div className="nav-tab">
                    Expérience
                </div>
              </Link>
              <Link to="app-contact" spy={true} smooth={true} duration={1000} >
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
          <Link to="app-intro" spy={true} smooth={true} duration={1000} className="arrow-container"  isDynamic={true}>
            <NextArrows darkColor={false}/>
          </Link>
        </div>
        <SectionBlock name="app-intro" title="À propos de moi">
          <div className="intro-text">
            <span>
              {this.introText} <br /><br />
              {this.introDescription} <br /><br />
              {this.introDescription}
            </span>
            <img src={profil}/>
          </div>
          <Link to="app-xp" spy={true} smooth={true} duration={1000} className="arrow-container" >
            <NextArrows darkColor={false}/>
          </Link>
        </SectionBlock>
        <SectionBlock name="app-xp" title="Connaissances">
            {
              this.skills.map((item) => {
                return <SkillChart 
                  key={`skill-${item.title}`} 
                  title={item.title} 
                  percentage={item.percentage}
                />;
              })
            }
          <Link to="app-studies" spy={true} smooth={true} duration={1000} className="arrow-container" >
            <NextArrows darkColor={true}/>
          </Link>
        </SectionBlock>
        <SectionBlock name="app-studies" title="Études">
            <div className="studies-header">
              <a target="blank" href="https://exia.cesi.fr/ecole-ingenieur-informatique"><img src={exia} id="exiaLogo"/></a>
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
          <Link to="app-pro" spy={true} smooth={true} duration={1000} className="arrow-container" >
            <NextArrows darkColor={false}/>
          </Link>
        </SectionBlock>
        <SectionBlock name="app-pro" title="Expérience professionnelle">
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
            <Link to="app-contact" spy={true} smooth={true} duration={1000} className="arrow-container">
              <NextArrows darkColor={true}/>
            </Link>
        </SectionBlock>
        <SectionBlock name="app-contact" title="Contact">
          <p>
            <label>Nom</label><br />
            <input type="text" value={this.state.contactName} id="contactName" name="contactName" onChange={this.handleInputChange}/>
          </p>
          <p>
            <label>E-Mail</label><br />
            <input type="text" value={this.state.contactMail} id="contactMail" name="contactMail" onChange={this.handleInputChange}/>
          </p>
          <p>
            <label>Sujet</label><br />
            <input type="text" value={this.state.contactSubject} id="contactSubject" name="contactSubject" onChange={this.handleInputChange}/>
          </p>
          <p>
            <label>Message</label><br />
            <textarea rows={10} value={this.state.contactBody} id="contactBody" name="contactBody" onChange={this.handleInputChange}/>
          </p>
          <p>
            <button>Envoyer</button>
          </p>
        </SectionBlock>
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
  contactName: string;
  contactMail: string;
  contactSubject: string;
  contactBody: string;
}

interface MyEventTarget extends EventTarget {
  value: string;
  name: string;
}

interface MyFormEvent<T> extends React.FormEvent<T> {
  target: MyEventTarget;
}