import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./css/Layout.scss";
import progressionData from "../util/progression.json";
import Progression from './Progression';

const Layout = () => {
    const [showStages, setShowStages] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowStages(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <nav>
                <div className="nav-brand">
                    <NavLink to="/" className="logo">
                        <img src="/logo192.png" alt="NihoLearn Logo" />
                        <h1>NihoLearn</h1>
                    </NavLink>
                </div>

                <div className="nav-center">
                    <div className="nav-center-inner">
                        <div
                            className={`dropdown-button ${showStages ? 'active' : ''}`}
                            onClick={() => setShowStages(!showStages)}
                            onKeyPress={(e) => e.key === 'Enter' && setShowStages(!showStages)}
                            tabIndex={0}
                            role="button"
                            aria-expanded={showStages}
                            aria-haspopup="true"
                        >
                            Learning Stages <span className="dropdown-arrow">{showStages ? '▼' : '▶'}</span>
                        </div>
                        <div className={`dropdown-content ${showStages ? 'show' : ''}`} ref={dropdownRef}>
                            <div className="stages-grid">
                                {progressionData.stages.map((stage) => {
                                    const isLocked = !stage.unlocked;
                                    return (
                                        <NavLink
                                            key={stage.id}
                                            to={`/Stage${stage.id}`}
                                            className={({ isActive }) => `stage-card ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                                            onClick={(e) => {
                                                if (isLocked) {
                                                    e.preventDefault();
                                                    return;
                                                }
                                                setShowStages(false);
                                            }}
                                        >
                                            <div className="stage-header">
                                                <h3>Stage {stage.id}</h3>
                                                {isLocked && <span className="lock-icon">🔒</span>}
                                            </div>
                                            <div className="stage-content">
                                                {stage.id === 0 && "Introduction to Japanese"}
                                                {stage.id === 1 && "Hiragana Writing System"}
                                                {stage.id === 2 && "Katakana Writing System"}
                                                {stage.id === 3 && "Basic Vocabulary & Greetings"}
                                                {stage.id === 4 && "Grammar & Sentence Structure"}
                                                {stage.id === 5 && "Advanced Grammar"}
                                                {stage.id === 6 && "Kanji Basics"}
                                                {stage.id === 7 && "Intermediate Kanji"}
                                                {stage.id === 8 && "Advanced Communication"}
                                            </div>
                                            <div className="stage-techniques">
                                                {stage.id === 0 && "• Learning Path Overview\n• Study Tips\n• Resources"}
                                                {stage.id === 1 && "• Charts\n• Flip Cards\n• Writing Practice"}
                                                {stage.id === 2 && "• Charts\n• Flip Cards\n• Writing Practice"}
                                                {stage.id === 3 && "• Vocabulary Cards\n• Dialogue Practice\n• Quizzes"}
                                                {stage.id === 4 && "• Grammar Drills\n• Sentence Building\n• Particle Usage"}
                                                {stage.id === 5 && "• Complex Sentences\n• Verb Forms\n• Practice"}
                                                {stage.id === 6 && "• Basic Kanji\n• Radicals\n• Writing Practice"}
                                                {stage.id === 7 && "• Common Kanji\n• Compounds\n• Reading Practice"}
                                                {stage.id === 8 && "• Advanced Dialogues\n• Reading\n• Writing"}
                                            </div>
                                            <div className="progress-bar">
                                                <div
                                                    className="progress-fill"
                                                    style={{ width: `${stage.progress}%` }}
                                                ></div>
                                            </div>
                                            {isLocked && (
                                                <div className="requirements">
                                                    Requires: Stage {stage.requirements.join(', ')}
                                                </div>
                                            )}
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav-right">
                    <ul>
                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Progression">Progression</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
