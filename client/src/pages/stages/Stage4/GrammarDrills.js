import React, { useState } from 'react';

import { grammarExercises } from '../../../util/data/grammar-and-sentence-structure';

import './css/GrammarDrills.scss';

// const grammarExercises = [
//     {
//         type: 'fill-blank',
//         japanese: 'わたし__学生です。',
//         options: ['は', 'が', 'を', 'に'],
//         correct: 'は',
//         english: 'I am a student.',
//         pattern: 'Topic は Noun です',
//         explanation: 'Use は to mark the topic of the sentence.'
//     },
//     {
//         type: 'pattern',
//         template: '[Subject] は [Location] に [Verb]',
//         japanese: '友だち__図書館__行きます。',
//         options: ['は...に', 'が...を', 'を...に', 'に...は'],
//         correct: 'は...に',
//         english: 'My friend goes to the library.',
//         explanation: 'Use は to mark the subject and に for the destination.'
//     },
//     {
//         type: 'error-fix',
//         japanese: 'わたしがペンをかきます。',
//         correct: 'わたしはペンでかきます。',
//         english: 'I write with a pen.',
//         explanation: 'Use は for the topic and で for the tool/means.'
//     },
//     {
//         type: 'fill-blank',
//         japanese: 'りんご__食べます。',
//         options: ['は', 'が', 'を', 'に'],
//         correct: 'を',
//         english: 'I eat an apple.',
//         pattern: 'Object を Verb',
//         explanation: 'Use を to mark the direct object of the action.'
//     }
// ];

const GrammarDrills = () => {
    const [currentExercise, setCurrentExercise] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [results, setResults] = useState([]);

    const handleAnswer = (answer) => {
        const current = grammarExercises[currentExercise];
        const isCorrect = answer === current.correct;

        setResults([...results, {
            question: current.japanese,
            userAnswer: answer,
            correct: current.correct,
            isCorrect,
            explanation: current.explanation,
            english: current.english
        }]);

        if (isCorrect) {
            setScore(score + 1);
        }

        setShowExplanation(true);
        setUserAnswer(answer);

        setTimeout(() => {
            if (currentExercise < grammarExercises.length - 1) {
                setCurrentExercise(currentExercise + 1);
                setShowExplanation(false);
                setUserAnswer('');
            } else {
                setIsComplete(true);
            }
        }, 2000);
    };

    const restartDrills = () => {
        setCurrentExercise(0);
        setScore(0);
        setShowExplanation(false);
        setUserAnswer('');
        setIsComplete(false);
        setResults([]);
    };

    if (isComplete) {
        return (
            <div className="grammar-drills">
                <div className="completion-summary">
                    <h2>練習完了！ Practice Complete!</h2>
                    <p className="final-score">Score: {score}/{grammarExercises.length}</p>

                    <div className="results-review">
                        <h3>Review Your Answers:</h3>
                        {results.map((result, index) => (
                            <div key={index} className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                                <div className="question-section">
                                    <p className="japanese">{grammarExercises[index].japanese}</p>
                                    <p className="english">{grammarExercises[index].english}</p>
                                </div>
                                <div className="answer-section">
                                    <p>Your answer: <span className="user-answer">{result.userAnswer}</span></p>
                                    {!result.isCorrect && (
                                        <p>Correct answer: <span className="correct-answer">{result.correct}</span></p>
                                    )}
                                </div>
                                <p className="explanation">{result.explanation}</p>
                            </div>
                        ))}
                    </div>

                    <button className="restart-button" onClick={restartDrills}>
                        Try Another Set
                    </button>
                </div>
            </div>
        );
    }

    const currentDrill = grammarExercises[currentExercise];

    return (
        <div className="grammar-drills">
            <div className="drill-container">
                <div className="progress-indicator">
                    <p>Exercise {currentExercise + 1} of {grammarExercises.length}</p>
                    <p>Score: {score}</p>
                </div>

                <div className="exercise-content">
                    <p className="english-prompt">{currentDrill.english}</p>
                    <p className="japanese-text">{currentDrill.japanese}</p>

                    {currentDrill.pattern && (
                        <p className="pattern-hint">Pattern: {currentDrill.pattern}</p>
                    )}

                    <div className="options">
                        {currentDrill.options?.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className={`option-button ${
                                    userAnswer === option 
                                        ? option === currentDrill.correct 
                                            ? 'correct' 
                                            : 'incorrect'
                                        : ''
                                }`}
                                disabled={showExplanation}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {showExplanation && (
                        <div className={`explanation ${
                            userAnswer === currentDrill.correct ? 'correct' : 'incorrect'
                        }`}>
                            <p>{currentDrill.explanation}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GrammarDrills;
