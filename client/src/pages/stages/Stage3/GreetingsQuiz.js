import React, { useState } from 'react';

import { greetingsData, introductionData} from "../../../util/data/basic-vocab";

import './css/GreetingsQuiz.scss';

// const greetingsData = [
//     {
//         japanese: 'こんにちは',
//         english: 'Hello (daytime)',
//         context: 'General daytime greeting',
//         audioUrl: null // TODO: Add audio files
//     },
//     {
//         japanese: 'おはようございます',
//         english: 'Good morning (polite)',
//         context: 'Morning greeting, formal',
//         audioUrl: null
//     },
//     {
//         japanese: 'こんばんは',
//         english: 'Good evening',
//         context: 'Evening greeting',
//         audioUrl: null
//     },
//     {
//         japanese: 'さようなら',
//         english: 'Goodbye',
//         context: 'When parting for a long time',
//         audioUrl: null
//     },
//     {
//         japanese: 'はじめまして',
//         english: 'Nice to meet you',
//         context: 'First-time meetings',
//         audioUrl: null
//     },
//     {
//         japanese: 'おやすみなさい',
//         english: 'Good night',
//         context: 'When going to bed',
//         audioUrl: null
//     },
//     {
//         japanese: 'ありがとうございます',
//         english: 'Thank you (polite)',
//         context: 'Expressing gratitude formally',
//         audioUrl: null
//     },
//     {
//         japanese: 'すみません',
//         english: 'Excuse me/Sorry',
//         context: 'Apologies or getting attention',
//         audioUrl: null
//     }
// ];
//
// const introductionData = [
//     {
//         japanese: 'わたしは [Name] です',
//         english: 'I am [Name]',
//         template: true,
//         context: 'Basic self-introduction'
//     },
//     {
//         japanese: '[Country] からきました',
//         english: 'I am from [Country]',
//         template: true,
//         context: 'Stating your origin'
//     },
//     {
//         japanese: 'よろしくおねがいします',
//         english: 'Nice to meet you (please treat me well)',
//         context: 'Used after self-introduction'
//     }
// ];

const GreetingsQuiz = () => {
    const [mode, setMode] = useState('greetings'); // 'greetings' or 'introductions'
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [results, setResults] = useState([]);

    const currentData = mode === 'greetings' ? greetingsData : introductionData;
    const currentQuestion = currentData[currentQuestionIndex];

    const handleAnswer = (isCorrect) => {
        const result = {
            japanese: currentQuestion.japanese,
            english: currentQuestion.english,
            context: currentQuestion.context,
            correct: isCorrect
        };

        setResults([...results, result]);
        if (isCorrect) setScore(score + 1);

        setTimeout(() => {
            if (currentQuestionIndex < currentData.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setShowAnswer(false);
            } else {
                setIsComplete(true);
            }
        }, 1500);
    };

    const restartQuiz = (newMode = 'greetings') => {
        setMode(newMode);
        setCurrentQuestionIndex(0);
        setShowAnswer(false);
        setScore(0);
        setIsComplete(false);
        setResults([]);
    };

    if (isComplete) {
        return (
            <div className="greetings-quiz">
                <div className="completion-screen">
                    <h2>Quiz Complete! 🎉</h2>
                    <p className="final-score">Score: {score}/{currentData.length}</p>

                    <div className="results-review">
                        <h3>Review Your Answers:</h3>
                        {results.map((result, index) => (
                            <div key={index} className={`result-item ${result.correct ? 'correct' : 'incorrect'}`}>
                                <div className="japanese">{result.japanese}</div>
                                <div className="english">{result.english}</div>
                                <div className="context">{result.context}</div>
                            </div>
                        ))}
                    </div>

                    <div className="action-buttons">
                        <button onClick={() => restartQuiz('greetings')}>
                            Practice Greetings Again
                        </button>
                        <button onClick={() => restartQuiz('introductions')}>
                            Practice Introductions
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="greetings-quiz">
            <div className="mode-selection">
                <button
                    className={`mode-btn ${mode === 'greetings' ? 'active' : ''}`}
                    onClick={() => restartQuiz('greetings')}
                >
                    Greetings
                </button>
                <button
                    className={`mode-btn ${mode === 'introductions' ? 'active' : ''}`}
                    onClick={() => restartQuiz('introductions')}
                >
                    Introductions
                </button>
            </div>

            <div className="quiz-progress">
                <p>Question {currentQuestionIndex + 1} of {currentData.length}</p>
                <p>Score: {score}</p>
            </div>

            <div className="question-container">
                <div className="japanese-text">{currentQuestion.japanese}</div>

                {!showAnswer && (
                    <div className="answer-buttons">
                        <button onClick={() => setShowAnswer(true)}>
                            Show English
                        </button>
                    </div>
                )}

                {showAnswer && (
                    <div className="answer-section">
                        <div className="english-text">{currentQuestion.english}</div>
                        <div className="context-text">{currentQuestion.context}</div>
                        <div className="confidence-buttons">
                            <button
                                className="knew-it"
                                onClick={() => handleAnswer(true)}
                            >
                                I Knew This! 😊
                            </button>
                            <button
                                className="study-more"
                                onClick={() => handleAnswer(false)}
                            >
                                Need Practice 📚
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GreetingsQuiz;
