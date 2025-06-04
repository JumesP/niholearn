import React from 'react';
import { Link } from 'react-router-dom';
import './css/Stage4Home.scss';

const Stage4Home = () => {
    return (
        <div className="stage4-home">
            <div className="stage-introduction">
                <h2>Introduction to Grammar & Sentence Structure</h2>
                <p>Master the building blocks of Japanese sentences through interactive exercises and practice.</p>
            </div>

            <div className="learning-paths">
                <div className="path-card">
                    <h3>Particle Quiz</h3>
                    <p>Practice using は, を, が, に, の correctly in sentences.</p>
                    <ul>
                        <li>Multiple choice exercises</li>
                        <li>Error detection challenges</li>
                        <li>Context-based particle selection</li>
                    </ul>
                    <Link to="/stage4/particle-quiz" className="start-button">Start Practice</Link>
                </div>

                <div className="path-card">
                    <h3>Sentence Builder</h3>
                    <p>Learn Japanese sentence structure through drag-and-drop exercises.</p>
                    <ul>
                        <li>Build complete sentences</li>
                        <li>Subject-Object-Verb order practice</li>
                        <li>Progressive difficulty levels</li>
                    </ul>
                    <Link to="/stage4/sentence-builder" className="start-button">Start Building</Link>
                </div>

                <div className="path-card">
                    <h3>Grammar Drills</h3>
                    <p>Master fundamental grammar patterns through targeted practice.</p>
                    <ul>
                        <li>Fill-in-the-blank exercises</li>
                        <li>Sentence pattern templates</li>
                        <li>Real-life scenario challenges</li>
                    </ul>
                    <Link to="/stage4/grammar-drills" className="start-button">Start Drills</Link>
                </div>
            </div>

            <div className="reference-section">
                <h3>Quick Grammar Reference</h3>
                <div className="particle-overview">
                    <h4>Basic Particles:</h4>
                    <ul>
                        <li><strong>は (wa)</strong> - Topic marker</li>
                        <li><strong>を (wo)</strong> - Direct object marker</li>
                        <li><strong>が (ga)</strong> - Subject marker</li>
                        <li><strong>に (ni)</strong> - Indirect object/destination marker</li>
                        <li><strong>の (no)</strong> - Possession marker</li>
                    </ul>
                </div>
                <div className="sentence-patterns">
                    <h4>Basic Sentence Patterns:</h4>
                    <ul>
                        <li>AはBです (A wa B desu) - A is B</li>
                        <li>AはBをCます (A wa B wo C-masu) - A does C to B</li>
                        <li>AはBにCます (A wa B ni C-masu) - A does C to/at/in B</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stage4Home;
