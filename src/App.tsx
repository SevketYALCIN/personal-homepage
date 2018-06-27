import * as React from 'react';
import './App.css';
import { Link, scrollSpy } from 'react-scroll';
import NextArrows from './components/ui/next-arrows/next-arrows';
import SkillChart, { SkillChartProps } from './components/ui/skill-chart/skill-chart';
import SectionBlock from './components/section-block/section-block';
import XpBlock from './components/xp-block/xp-block';
import RessourcesFr from './ressources/ressources.fr';
import RessourcesEn from './ressources/ressources.en';
import Ressource from './ressources/ressource';
import { Helmet } from 'react-helmet';

const logo = require('./assets/splash.jpg');
const profil = require('./assets/profile.jpg');
const exia = require('./assets/exia.png');

enum Lang {
  English,
  French
}

class App extends React.Component<AppProps, AppState> {
  introRef: HTMLDivElement;
  xpRef: HTMLDivElement;
  studiesRef: HTMLDivElement;
  proRef: HTMLDivElement;
  contactRef: HTMLDivElement;
  headerRef: HTMLDivElement;
  appRef: HTMLDivElement;
  skills: Array<SkillChartProps> = [
    {
      percentage: 60,
      title: 'React / Angular'
    },
    {
      percentage: 75,
      title: 'ASP.NET Core / C#'
    },
    {
      percentage: 40,
      title: 'Node.js'
    },
    {
      percentage: 70,
      title: 'SQL'
    },
    {
      percentage: 70,
      title: 'ALM / Agile'
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
      ressource: RessourcesEn,
      lang: this.props.isEnglish ? Lang.English : Lang.French
    };
  }

  changeLang = (language: Lang) => {
    if (language !== this.state.lang) {
      this.setState((current) => ({ 
        ...current, 
        lang: language, 
        ressource: language === Lang.English ? RessourcesEn : RessourcesFr }));
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop >= this.headerRef.clientHeight) {
        this.setState((current) => ({ ...current, navbar: true }));
      } else {
        this.setState((current) => ({ ...current, navbar: false }));
      }
    // tslint:disable-next-line:align
    }, true);
  
    scrollSpy.update();
  }

  render() {
    return (
      <div className="app" ref={(input: HTMLDivElement) => { this.appRef = input; }}>
        <Helmet>
          <title>Sevket YALCIN - Full Stack Web Developer</title>
          <meta name="description" content="" />
        </Helmet>
        <div className={`app-navbar ${this.state.navbar ? 'is-active' : ''} `}>
          <div className="nav-tab-container">
              <Link to="app-header" spy={true} smooth={true} duration={1000}>
                <div className="nav-tab">
                    {this.state.ressource.menuHome}
                </div>
              </Link>
              <Link to="app-intro" spy={true} smooth={true} duration={1000}  isDynamic={true}>
                <div className="nav-tab">
                    {this.state.ressource.menuIntro}
                </div>
              </Link>
              <Link to="app-xp" spy={true} smooth={true} duration={1000} >
                <div className="nav-tab">
                    {this.state.ressource.menuSkills}
                </div>
              </Link>
              <Link to="app-studies" spy={true} smooth={true} duration={1000} >
                <div className="nav-tab">
                    {this.state.ressource.menuFormation}
                </div>
              </Link>
              <Link to="app-pro" spy={true} smooth={true} duration={1000} >
                <div className="nav-tab">
                    {this.state.ressource.menuXP}
                </div>
              </Link>
          </div>
          <div className="lang-container">
            <span 
              onClick={() => this.changeLang(Lang.English)} 
              className={this.state.lang === Lang.English ? 'is-active' : ''}
            >
              EN
            </span>
            <div className="separator">|</div>
            <span 
              onClick={() => this.changeLang(Lang.French)}
              className={this.state.lang === Lang.French ? 'is-active' : ''}
            >
              FR
            </span>
          </div>
        </div>
        <div className="app-header" id="app-header" ref={(input: HTMLDivElement) => { this.headerRef = input; }}>
          <div className="app-header-name">
            <h1 className="name">Sevket YALCIN</h1>
            <div className="job">{this.state.ressource.jobName}</div>
          </div>
          <img src={logo} />
          <div className="lang-container">
            <span 
              onClick={() => this.changeLang(Lang.English)} 
              className={this.state.lang === Lang.English ? 'is-active' : ''}
            >
              EN
            </span>
            <div className="separator">|</div>
            <span 
              onClick={() => this.changeLang(Lang.French)}
              className={this.state.lang === Lang.French ? 'is-active' : ''}
            >
              FR
            </span>
          </div>
          <Link to="app-intro" spy={true} smooth={true} duration={1000} className="arrow-container"  isDynamic={true}>
            <NextArrows darkColor={false}/>
          </Link>
        </div>
        <SectionBlock name="app-intro" title={this.state.ressource.introTitle}>
          <div className="intro-text">
            <span dangerouslySetInnerHTML={{__html: this.state.ressource.introBody}} />
            <img src={profil}/>
          </div>
          <Link to="app-xp" spy={true} smooth={true} duration={1000} className="arrow-container" >
            <NextArrows darkColor={false}/>
          </Link>
        </SectionBlock>
        <SectionBlock name="app-xp" title={this.state.ressource.skillsTitle}>
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
        <SectionBlock name="app-studies" title={this.state.ressource.studiesTitle}>
            <div className="studies-header">
              <a target="blank" href="https://exia.cesi.fr/ecole-ingenieur-informatique"><img src={exia} id="exiaLogo"/></a>
              <div className="studies-bloc">
                <blockquote dangerouslySetInnerHTML={{__html: this.state.ressource.studiesSchoolBody}} />
                <a className="desktop-only" target="blank" href="https://exia.cesi.fr/ecole-ingenieur-informatique"><i>
                  {this.state.ressource.studiesMoreInfo}
                </i></a>
              </div>
            </div>
            <div className="studies-xp">
              <div className="xp-bloc">
                <span className="xp-date">{this.state.ressource.studiesDate}</span> 
                <span className="xp-text">
                  <div className="xp-title">{this.state.ressource.studiesMajor}</div>
                  <div><br />
                    <span dangerouslySetInnerHTML={{__html: this.state.ressource.studiesBody}} />
                  </div>
                </span> 
              </div>
            </div>
          <Link to="app-pro" spy={true} smooth={true} duration={1000} className="arrow-container" >
            <NextArrows darkColor={false}/>
          </Link>
        </SectionBlock>
        <SectionBlock name="app-pro" title={this.state.ressource.xpTitle}>
            <XpBlock 
              date={this.state.ressource.xpForciaDate}
              title={this.state.ressource.xpForciaTitle} 
              body={this.state.ressource.xpForciaBody} 
            />
            <XpBlock 
              date={this.state.ressource.xpISDate}
              title={this.state.ressource.xpISTitle} 
              body={this.state.ressource.xpISBody} 
            />
            <XpBlock 
              date={this.state.ressource.xpStageDate}
              title={this.state.ressource.xpStageTitle} 
              body={this.state.ressource.xpStageBody} 
            />
        </SectionBlock>
      </div>
    );
  }
}

export default App;

interface AppProps {
  isEnglish: boolean;
}

interface AppState {
  navbar: boolean;
  ressource: Ressource;
  lang: Lang;
}