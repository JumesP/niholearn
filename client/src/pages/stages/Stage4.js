import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Stage4Home from './Stage4/Stage4Home';
import ParticleQuiz from './Stage4/ParticleQuiz';
import SentenceBuilder from './Stage4/SentenceBuilder';
import GrammarDrills from './Stage4/GrammarDrills';
import '../css/Stage.scss';

const Stage4 = () => {
    return (
        <div className="stage-container">
            <h1>Stage 4: Grammar & Sentence Structure</h1>
            <div className="stage-content">
                <Routes>
                    <Route path="/" element={<Stage4Home />} />
                    <Route path="/particle-quiz" element={<ParticleQuiz />} />
                    <Route path="/sentence-builder" element={<SentenceBuilder />} />
                    <Route path="/grammar-drills" element={<GrammarDrills />} />
                </Routes>
            </div>
        </div>
    );
};

export default Stage4;

