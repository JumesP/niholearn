import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Stage2Home from './Stage2/Stage2Home';
import KatakanaFlipCards from './Stage2/KatakanaFlipCards';
import KatakanaQuiz from './Stage2/KatakanaQuiz';
import KatakanaChart from './Stage2/KatakanaChart';
import '../css/Stage.scss';

const Stage2 = () => {
    return (
        <div className="stage-container">
            <h1>Stage 2: Katakana</h1>
            <div className="stage-content">
                <Routes>
                    <Route path="/" element={<Stage2Home />} />
                    <Route path="/flip-cards" element={<KatakanaFlipCards />} />
                    <Route path="/quiz" element={<KatakanaQuiz />} />
                    <Route path="/chart" element={<KatakanaChart />} />
                </Routes>
            </div>
        </div>
    );
};

export default Stage2;

