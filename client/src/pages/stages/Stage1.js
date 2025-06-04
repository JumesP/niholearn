import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Stage1Home from './Stage1/Stage1Home';
import HiraganaFlipCards from './Stage1/HiraganaFlipCards';
import HiraganaQuiz from './Stage1/HiraganaQuiz';
import HiraganaChart from './Stage1/HiraganaChart';
import '../css/Stage.scss';

const Stage1 = () => {
    return (
        <div className="stage-container">
            <h1>Stage 1: Hiragana</h1>
            <div className="stage-content">
                <Routes>
                    <Route path="/" element={<Stage1Home />} />
                    <Route path="/flip-cards" element={<HiraganaFlipCards />} />
                    <Route path="/quiz" element={<HiraganaQuiz />} />
                    <Route path="/chart" element={<HiraganaChart />} />
                </Routes>
            </div>
        </div>
    );
};

export default Stage1;

