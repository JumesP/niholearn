import React from 'react';
import { Link } from 'react-router-dom';
import './css/Stage2Home.scss';

const Stage2Home = () => {
    return (
        <div className="stage2-home">
            <div className="stage-introduction">
                <h2>Katakana: The Second Japanese Alphabet</h2>
                <p>Learn the writing system used for foreign words and emphasis through interactive practice.</p>
            </div>

            <div className="learning-paths">
                <div className="path-card">
                    <h3>Katakana Flashcards</h3>
                    <p>Learn each character with interactive cards.</p>
                    <ul>
                        <li>Master katakana characters</li>
                        <li>Learn proper pronunciation</li>
                        <li>Practice by character groups</li>
                    </ul>
                    <Link to="/stage2/flip-cards" className="start-button">Start Learning</Link>
                </div>

                <div className="path-card">
                    <h3>Katakana Quiz</h3>
                    <p>Test your katakana recognition and recall.</p>
                    <ul>
                        <li>Interactive testing</li>
                        <li>Progress tracking</li>
                        <li>Customizable groups</li>
                    </ul>
                    <Link to="/stage2/quiz" className="start-button">Take Quiz</Link>
                </div>

                <div className="path-card">
                    <h3>Reference Chart</h3>
                    <p>Complete katakana reference with readings.</p>
                    <ul>
                        <li>Full character chart</li>
                        <li>Common loanwords</li>
                        <li>Group organization</li>
                    </ul>
                    <Link to="/stage2/chart" className="start-button">View Chart</Link>
                </div>
            </div>

            <div className="quick-reference">
                <h3>Quick Reference</h3>
                <div className="reference-sections">
                    <div className="section">
                        <h4>Vowels</h4>
                        <div className="character-grid">
                            <div className="character-item">
                                <span className="kana">ア</span>
                                <span className="romaji">a</span>
                            </div>
                            <div className="character-item">
                                <span className="kana">イ</span>
                                <span className="romaji">i</span>
                            </div>
                            <div className="character-item">
                                <span className="kana">ウ</span>
                                <span className="romaji">u</span>
                            </div>
                            <div className="character-item">
                                <span className="kana">エ</span>
                                <span className="romaji">e</span>
                            </div>
                            <div className="character-item">
                                <span className="kana">オ</span>
                                <span className="romaji">o</span>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <h4>Common Loanwords</h4>
                        <div className="example-words">
                            <div className="word-item">
                                <span className="katakana">コーヒー</span>
                                <span className="meaning">kōhī (coffee)</span>
                            </div>
                            <div className="word-item">
                                <span className="katakana">パン</span>
                                <span className="meaning">pan (bread)</span>
                            </div>
                            <div className="word-item">
                                <span className="katakana">テレビ</span>
                                <span className="meaning">terebi (TV)</span>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <h4>Study Tips</h4>
                        <ul>
                            <li>Compare with hiragana shapes</li>
                            <li>Practice with common loanwords</li>
                            <li>Write characters repeatedly</li>
                            <li>Use flashcards daily</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stage2Home;
