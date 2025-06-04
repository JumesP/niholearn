import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Stage3Home from './Stage3/Stage3Home';
import BasicVocabFlipCards from './Stage3/BasicVocabFlipCards';
import GreetingsQuiz from './Stage3/GreetingsQuiz';
import DialoguePractice from './Stage3/DialoguePractice';
import SentencePractice from './Stage3/SentencePractice';
import '../css/Stage.scss';

const Stage3 = () => {
    return (
        <div className="stage-container">
            <h1>Stage 3: Basic Vocabulary & Phrases</h1>
            <div className="stage-content">
                <Routes>
                    <Route path="/" element={<Stage3Home />} />
                    <Route path="/vocab-cards" element={<BasicVocabFlipCards />} />
                    <Route path="/greetings" element={<GreetingsQuiz />} />
                    <Route path="/dialogues" element={<DialoguePractice />} />
                    <Route path="/sentences" element={<SentencePractice />} />
                </Routes>
            </div>
        </div>
    );
};

export default Stage3;

