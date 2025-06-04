import React from 'react';
import './css/About.scss';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="japanese-brush">About</div>
        <div className="japanese-text">私たちについて</div>
      </div>

      <div className="mission-section">
        <div className="circle-container">
          <div className="circle-background"></div>
          <h2>Our Mission</h2>
          <p>To make learning Japanese an engaging, structured, and enjoyable journey for everyone.</p>
        </div>
      </div>

      <div className="philosophy-grid">
        <div className="philosophy-card">
          <span className="kanji">楽</span>
          <h3>Enjoyable Learning</h3>
          <p>We believe learning should be fun and engaging, not a chore.</p>
        </div>
        <div className="philosophy-card">
          <span className="kanji">順</span>
          <h3>Step by Step</h3>
          <p>Master concepts gradually with our carefully structured curriculum.</p>
        </div>
        <div className="philosophy-card">
          <span className="kanji">実</span>
          <h3>Practical Focus</h3>
          <p>Learn Japanese that you'll actually use in real-world situations.</p>
        </div>
        <div className="philosophy-card">
          <span className="kanji">励</span>
          <h3>Constant Support</h3>
          <p>Progress with confidence through our guided learning path.</p>
        </div>
      </div>

      <div className="features-showcase">
        <h2>What Makes Us Different</h2>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <div className="feature-content">
              <h3>Structured Progress</h3>
              <p>Clear learning path from complete beginner to conversational Japanese</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔄</div>
            <div className="feature-content">
              <h3>Smart Reviews</h3>
              <p>Spaced repetition system ensures long-term retention</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎮</div>
            <div className="feature-content">
              <h3>Interactive Learning</h3>
              <p>Engage with the language through quizzes, games, and exercises</p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section">
        <div className="decorative-line"></div>
        <h2>Created with <span className="heart">❤️</span> by Language Enthusiasts</h2>
        <p className="team-description">
          NihoLearn was developed by a team of passionate developers and Japanese language experts
          who understand the challenges of learning a new language.
        </p>
      </div>

      <div className="contact-section">
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p>Questions? Suggestions? We'd love to hear from you!</p>
          <div className="email-button">
            <a href="mailto:contact@niholearn.com" className="contact-btn">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="decorative-footer">
        <div className="japanese-pattern"></div>
        <p>MIT © James Price</p>
      </div>
    </div>
  );
};

export default About;

