import React from 'react';
import { Link } from 'react-router-dom';
import './css/Main.scss';

const Main = () => {
  return (
    <div className="main-landing">
      <div className="hero-container">
        <div className="japanese-pattern"></div>
        <div className="content-wrapper">
          <h1 className="main-title">
            <span className="japanese">日本語</span>
            <span className="english">NihoLearn</span>
          </h1>
          <p className="zen-quote">"The journey of a thousand miles begins with a single step"</p>
          <Link to="/Stage0" className="start-journey-btn">
            Begin Your Journey
          </Link>
        </div>
      </div>

      <div className="feature-circles">
        <div className="circle">
          <span className="kanji">学</span>
          <span className="label">Learn</span>
        </div>
        <div className="circle">
          <span className="kanji">練</span>
          <span className="label">Practice</span>
        </div>
        <div className="circle">
          <span className="kanji">成</span>
          <span className="label">Master</span>
        </div>
      </div>

      <div className="journey-path">
        <div className="path-line"></div>
        <div className="milestone">
          <div className="dot"></div>
          <span className="kanji-label">始</span>
          <span className="text">Start</span>
        </div>
        <div className="milestone">
          <div className="dot"></div>
          <span className="kanji-label">歩</span>
          <span className="text">Progress</span>
        </div>
        <div className="milestone">
          <div className="dot"></div>
          <span className="kanji-label">達</span>
          <span className="text">Achieve</span>
        </div>
      </div>

      <div className="zen-garden">
        <div className="zen-text">
          <h2>Learning Through Harmony</h2>
          <p>Like a carefully tended Japanese garden, your journey to mastering the language will be methodical, peaceful, and beautiful.</p>
        </div>
        <div className="garden-elements">
          <div className="element stone"></div>
          <div className="element ripple"></div>
          <div className="element plant"></div>
        </div>
      </div>

      <div className="footer-wave">
        <div className="japanese-motifs">
          <span>研</span>
          <span>道</span>
          <span>真</span>
        </div>
        <p className="footer-text">Begin your journey to Japanese mastery</p>
      </div>

      <div className="wave-decoration">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#948979" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <p>MIT © James Price</p>
    </div>
  );
};

export default Main;
