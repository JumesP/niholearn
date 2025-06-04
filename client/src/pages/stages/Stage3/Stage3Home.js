import React from 'react';
import { Link } from 'react-router-dom';
import './css/Stage3Home.scss';

const Stage3Home = () => {
    return (
        <div className="stage3-home">
            <div className="stage-introduction">
                <h2>Basic Vocabulary & Phrases</h2>
                <p>Start communicating in Japanese with essential vocabulary and everyday expressions.</p>
            </div>

            <div className="learning-paths">
                <div className="path-card">
                    <h3>Vocabulary Flashcards</h3>
                    <p>Learn essential Japanese words with interactive flashcards.</p>
                    <ul>
                        <li>Common nouns and verbs</li>
                        <li>Useful adjectives</li>
                        <li>Practice with audio</li>
                    </ul>
                    <Link to="/stage3/vocab-cards" className="start-button">Start Learning</Link>
                </div>

                <div className="path-card">
                    <h3>Greetings & Phrases</h3>
                    <p>Master common Japanese greetings and expressions.</p>
                    <ul>
                        <li>Daily greetings</li>
                        <li>Polite expressions</li>
                        <li>Self-introduction phrases</li>
                    </ul>
                    <Link to="/stage3/greetings" className="start-button">Practice Greetings</Link>
                </div>

                <div className="path-card">
                    <h3>Basic Dialogues</h3>
                    <p>Practice real conversations in Japanese.</p>
                    <ul>
                        <li>Interactive dialogues</li>
                        <li>Common scenarios</li>
                        <li>Listening practice</li>
                    </ul>
                    <Link to="/stage3/dialogues" className="start-button">Try Conversations</Link>
                </div>

                <div className="path-card">
                    <h3>Sentence Practice</h3>
                    <p>Build simple Japanese sentences.</p>
                    <ul>
                        <li>Basic sentence patterns</li>
                        <li>X は Y です format</li>
                        <li>Simple descriptions</li>
                    </ul>
                    <Link to="/stage3/sentences" className="start-button">Build Sentences</Link>
                </div>
            </div>

            <div className="quick-reference">
                <h3>Quick Reference</h3>
                <div className="reference-sections">
                    <div className="section">
                        <h4>Common Greetings</h4>
                        <ul>
                            <li><span className="japanese">こんにちは</span> - Hello</li>
                            <li><span className="japanese">おはようございます</span> - Good morning</li>
                            <li><span className="japanese">こんばんは</span> - Good evening</li>
                            <li><span className="japanese">さようなら</span> - Goodbye</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h4>Self Introduction</h4>
                        <ul>
                            <li><span className="japanese">わたしは [Name] です</span> - I am [Name]</li>
                            <li><span className="japanese">[Country] からきました</span> - I'm from [Country]</li>
                            <li><span className="japanese">よろしくおねがいします</span> - Nice to meet you</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h4>Basic Sentences</h4>
                        <ul>
                            <li><span className="japanese">これは _____ です</span> - This is _____</li>
                            <li><span className="japanese">わたしは _____ です</span> - I am _____</li>
                            <li><span className="japanese">_____ が すき です</span> - I like _____</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stage3Home;
