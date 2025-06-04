import React from 'react';
import '../css/Stage.scss';

const Stage0 = () => {
  return (
    <div className="main-container">
      <section className="hero-section">
        <h1>Welcome to NihoLearn</h1>
        <p className="subtitle">Your Journey to Japanese Mastery Starts Here</p>
        <a href="#stages" className="get-started-btn">Begin Your Journey</a>
      </section>

      <div className="stage-overview" id="stages">
        <div className="stage-card">
          <h3><span className="emoji">🌱</span> Stage 0: Introduction & Setup</h3>
          <p className="purpose">Set expectations, ease users into the language, and explain the roadmap.</p>
          <ul className="content-list">
            <li>Overview of the three writing systems (Hiragana, Katakana, Kanji)</li>
            <li>Learning philosophy and how to use the app</li>
            <li>Encouragement for consistent, paced learning</li>
            <li>Motivation to reduce overwhelm for beginners</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="stage-card">
          <h3><span className="emoji">🅰️</span> Stage 1: Hiragana Mastery</h3>
          <p className="purpose">Learn the basic phonetic characters used in native Japanese words and grammar.</p>
          <ul className="content-list">
            <li>46 basic Hiragana characters (あ〜ん)</li>
            <li>Voiced, semi-voiced sounds (e.g., が, ぱ)</li>
            <li>Small kana (ゃ, ゅ, ょ) combinations</li>
            <li>Practice with flashcards, typing, and audio pronunciation</li>
            <li>Simple example words and quizzes</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="stage-card">
          <h3><span className="emoji">🅰️</span> Stage 2: Katakana Mastery</h3>
          <p className="purpose">Master the second phonetic system used for foreign words, names, and sound effects.</p>
          <ul className="content-list">
            <li>46 basic Katakana characters (ア〜ン)</li>
            <li>Voiced and combo sounds (ギャ, ピュ)</li>
            <li>Practice with loanwords (e.g., コンピュータ, アイス)</li>
            <li>Focus on distinguishing visually similar characters</li>
            <li>Flashcards, quizzes, and pronunciation practice</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="stage-card">
          <h3><span className="emoji">🈚</span> Stage 3: Basic Vocabulary & Phrases</h3>
          <p className="purpose">Start communication by learning practical words and simple sentences.</p>
          <ul className="content-list">
            <li>Greetings (こんにちは, はじめまして)</li>
            <li>Common nouns, verbs, and adjectives</li>
            <li>Basic sentence patterns like: X は Y です (X is Y)</li>
            <li>Listening and typing practice</li>
            <li>Example mini-conversations and quiz review</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="stage-card">
          <h3><span className="emoji">📐</span> Stage 4: Intro to Grammar & Sentence Structure</h3>
          <p className="purpose">Learn foundational grammar to create meaningful sentences.</p>
          <ul className="content-list">
            <li>Core particles (は, を, が, に, の)</li>
            <li>Formal verb forms (ます, です)</li>
            <li>Negative forms (じゃない, ません)</li>
            <li>Questions (か) and basic sentence building</li>
            <li>Interactive drag-and-drop exercises</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="stage-card">
          <h3><span className="emoji">漢</span> Stage 5: Kanji Introduction</h3>
          <p className="purpose">Begin learning the essential logographic system used in real-world Japanese.</p>
          <ul className="content-list">
            <li>Learn first 20–50 kanji (人, 日, 月, 学, 生, etc.)</li>
            <li>Distinction between onyomi and kunyomi</li>
            <li>Practice with common vocabulary using kanji</li>
            <li>Stroke order diagrams and mnemonics</li>
            <li>Flashcards with meanings and readings</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="stage-card">
          <h3><span className="emoji">📖</span> Stage 6: Reading Practice</h3>
          <p className="purpose">Apply knowledge in reading simple, structured Japanese texts.</p>
          <ul className="content-list">
            <li>Short texts and dialogues with furigana</li>
            <li>Situational reading practice</li>
            <li>Comprehension questions</li>
            <li>Grammar and vocabulary reinforcement</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="stage-card">
          <h3><span className="emoji">🗣️</span> Stage 7: Listening & Speaking Practice</h3>
          <p className="purpose">Build listening comprehension and speaking fluency.</p>
          <ul className="content-list">
            <li>Native-paced audio clips with transcripts</li>
            <li>Shadowing exercises for pronunciation</li>
            <li>Speaking drills to build confidence</li>
            <li>Listening quizzes and challenges</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="stage-card">
          <h3><span className="emoji">🔁</span> Stage 8: Review & Expand</h3>
          <p className="purpose">Reinforce learning and prepare for real-world application or JLPT N5.</p>
          <ul className="content-list">
            <li>Vocabulary and kanji reviews</li>
            <li>Grammar reviews and mixed quizzes</li>
            <li>Milestone achievements</li>
            <li>Suggestions for native material</li>
          </ul>
        </div>
      </div>

      <section className="features-section">
        <h2>Why Choose NihoLearn?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-emoji">🎯</span>
            <h3>Structured Learning Path</h3>
            <p>Follow a carefully designed curriculum that builds your skills step by step</p>
          </div>
          <div className="feature-card">
            <span className="feature-emoji">🔄</span>
            <h3>Spaced Repetition</h3>
            <p>Optimize your memorization with scientifically-proven review intervals</p>
          </div>
          <div className="feature-card">
            <span className="feature-emoji">🎮</span>
            <h3>Interactive Practice</h3>
            <p>Learn through engaging exercises, quizzes, and real-world examples</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stage0;
