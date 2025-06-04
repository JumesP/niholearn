import React from 'react';
import { Link } from 'react-router-dom';
import './css/Stage1Home.scss';

const Stage1Home = () => {
    return (
        <div className="stage1-home">
            <div className="stage-introduction">
                <h2>Hiragana: The Basic Japanese Alphabet</h2>
                <p>Master the fundamental Japanese writing system through interactive exercises and practice.</p>
            </div>

            <div className="learning-paths">
                <div className="path-card">
                    <h3>Hiragana Flashcards</h3>
                    <p>Learn each character through interactive flashcards.</p>
                    <ul>
                        <li>Practice reading hiragana</li>
                        <li>Learn proper pronunciation</li>
                        <li>Master character groups</li>
                    </ul>
                    <Link to="/stage1/flip-cards" className="start-button">Start Learning</Link>
                </div>

                <div className="path-card">
                    <h3>Hiragana Quiz</h3>
                    <p>Test your knowledge of hiragana characters.</p>
                    <ul>
                        <li>Interactive quizzes</li>
                        <li>Track your progress</li>
                        <li>Practice specific groups</li>
                    </ul>
                    <Link to="/stage1/quiz" className="start-button">Take Quiz</Link>
                </div>

                <div className="path-card">
                    <h3>Reference Chart</h3>
                    <p>Complete hiragana chart with pronunciations.</p>
                    <ul>
                        <li>All hiragana characters</li>
                        <li>Organized by groups</li>
                        <li>Quick reference guide</li>
                    </ul>
                    <Link to="/stage1/chart" className="start-button">View Chart</Link>
                </div>
            </div>

            <div className="quick-reference">
                <h3>Quick Reference</h3>
                <div className="reference-sections">
                    <div className="section">
                        <h4>Vowels</h4>
                        <div className="character-grid">
                            <div className="character-item">
                                <span className="kana">あ</span>
                                <span className="romaji">a</span>
                            </div>
                            <div className="character-item">
                                <span className="kana">い</span>
                                <span className="romaji">i</span>
                            </div>
                            <div className="character-item">
                                <span className="kana">う</span>
                                <span className="romaji">u</span>
                            </div>
                            <div className="character-item">
                                <span className="kana">え</span>
                                <span className="romaji">e</span>
                            </div>
                            <div className="character-item">
                                <span className="kana">お</span>
                                <span className="romaji">o</span>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <h4>Tips for Learning</h4>
                        <ul>
                            <li>Practice writing each character</li>
                            <li>Focus on one group at a time</li>
                            <li>Use the flashcards regularly</li>
                            <li>Test yourself with the quiz</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h4>Common Combinations</h4>
                        <div className="character-grid">
                            <div className="character-item">
                                <span className="kana">きょ</span>
                                <span className="romaji">kyo</span>
                            </div>
                            <div className="character-item">
                                <span className="kana">しゃ</span>
                                <span className="romaji">sha</span>
                            </div>
                            <div className="character-item">
                                <span className="kana">ちょ</span>
                                <span className="romaji">cho</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stage1Home;

