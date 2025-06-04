import React, { useState } from 'react';

import { KatakanaCharacters } from "../../../util/data/characters";

import './css/KatakanaQuiz.scss';

// Update katakanaGroups to include new groups
const katakanaGroups = {
    vowels: KatakanaCharacters.slice(0, 5),
    k: KatakanaCharacters.slice(5, 10),
    s: KatakanaCharacters.slice(10, 15),
    t: KatakanaCharacters.slice(15, 20),
    n: KatakanaCharacters.slice(20, 25),
    h: KatakanaCharacters.slice(25, 30),
    m: KatakanaCharacters.slice(30, 35),
    y: KatakanaCharacters.slice(35, 38),
    r: KatakanaCharacters.slice(38, 43),
    w: KatakanaCharacters.slice(43, 45),
    extra: KatakanaCharacters.slice(45) // for ン
};

const KatakanaQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isConfiguring, setIsConfiguring] = useState(true);
    const [showReference, setShowReference] = useState(false);
    const [selectedGroups, setSelectedGroups] = useState({
        vowels: true,
        k: false,
        s: false,
        t: false,
        n: false,
        h: false,
        m: false,
        y: false,
        r: false,
        w: false,
        extra: false
    });
    const [quizLength, setQuizLength] = useState(10);
    const [activeCharacterSet, setActiveCharacterSet] = useState([]);
    const [remainingCharacters, setRemainingCharacters] = useState([]);
    const [quizResults, setQuizResults] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
        const question = remainingCharacters[randomIndex];
        setRemainingCharacters(prev => prev.filter((_, index) => index !== randomIndex));
        return question;
    };

    const handleGroupSelection = (group) => {
        setSelectedGroups(prev => ({
            ...prev,
            [group]: !prev[group]
        }));
    };

    const startQuiz = () => {
        const selectedChars = Object.entries(selectedGroups)
            .filter(([_, isSelected]) => isSelected)
            .flatMap(([group]) => katakanaGroups[group]);

        if (selectedChars.length === 0) {
            setFeedback('Please select at least one character group');
            return;
        }

        const availableLength = Math.min(quizLength, selectedChars.length);
        setQuizLength(availableLength);

        setRemainingCharacters(selectedChars);

        const firstQuestion = selectedChars[Math.floor(Math.random() * selectedChars.length)];
        setRemainingCharacters(prev => prev.filter(char => char !== firstQuestion));

        setActiveCharacterSet(selectedChars);
        setCurrentQuestion(firstQuestion);
        setIsConfiguring(false);
        setScore(0);
        setQuestionsAnswered(0);
        setFeedback('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isCorrect = userAnswer.toLowerCase() === currentQuestion.romaji;
        const result = {
            kana: currentQuestion.kana,
            romaji: currentQuestion.romaji,
            userAnswer: userAnswer.toLowerCase(),
            isCorrect
        };

        setQuizResults(prev => [...prev, result]);

        if (isCorrect) {
            setScore(score + 1);
            setFeedback('Correct! 🎉');
        } else {
            setFeedback(`Incorrect. The answer was "${currentQuestion.romaji}"`);
        }

        const newQuestionsAnswered = questionsAnswered + 1;
        setQuestionsAnswered(newQuestionsAnswered);
        setUserAnswer('');

        if (newQuestionsAnswered >= quizLength) {
            setTimeout(() => {
                setShowSuccess(true);
            }, 1500);
        } else {
            setTimeout(() => {
                setFeedback('');
                setCurrentQuestion(getRandomQuestion());
            }, 1500);
        }
    };

    const restartQuiz = () => {
        setIsConfiguring(true);
        setShowSuccess(false);
        setQuizResults([]);
        setScore(0);
        setQuestionsAnswered(0);
        setFeedback('');
    };

    const QuizConfig = () => (
        <div className="quiz-config">
            <h2>Configure Your Quiz</h2>
            <div className="group-selection">
                <h3>Select Character Groups:</h3>
                {Object.entries(katakanaGroups).map(([group, chars]) => (
                    <label key={group}>
                        <input
                            type="checkbox"
                            checked={selectedGroups[group]}
                            onChange={() => handleGroupSelection(group)}
                        />
                        {group.toUpperCase()} ({chars[0].kana}...)
                    </label>
                ))}
            </div>
            <div className="length-selection">
                <label>
                    Quiz Length:
                    <input
                        type="number"
                        min="1"
                        max="50"
                        value={quizLength}
                        onChange={(e) => {
                            const selectedChars = Object.entries(selectedGroups)
                                .filter(([_, isSelected]) => isSelected)
                                .flatMap(([group]) => katakanaGroups[group]);
                            const maxLength = selectedChars.length;
                            const newValue = Math.min(parseInt(e.target.value), maxLength);
                            setQuizLength(newValue);
                        }}
                    />
                    <span className="max-length-info">
                        (Max: {Object.entries(selectedGroups)
                            .filter(([_, isSelected]) => isSelected)
                            .flatMap(([group]) => katakanaGroups[group]).length} characters)
                    </span>
                </label>
            </div>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );

    const ReferenceChart = () => (
        <div className="reference-chart">
            <h3>Katakana Reference</h3>
            <div className="chart-grid">
                {Object.entries(katakanaGroups).map(([group, chars]) => (
                    <div key={group} className="chart-group">
                        <h4>{group.toUpperCase()}</h4>
                        {chars.map(char => (
                            <div key={char.kana} className="chart-item">
                                <div className="kana-section">
                                    <span className="kana">{char.kana}</span>
                                </div>
                                <div className="romaji-section">
                                    <span className="romaji">{char.romaji}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );

    const QuizSuccess = () => (
        <div className="quiz-success">
            <h2>Quiz Complete! 🎉</h2>
            <div className="quiz-summary">
                <h3>Final Score: {score}/{quizLength}</h3>
                <h3>Accuracy: {Math.round((score/quizLength) * 100)}%</h3>
            </div>

            <div className="results-breakdown">
                <h3>Results Breakdown:</h3>
                <div className="results-grid">
                    <div className="results-header">
                        <span>Kana</span>
                        <span>Correct Answer</span>
                        <span>Your Answer</span>
                        <span>Result</span>
                    </div>
                    {quizResults.map((result, index) => (
                        <div key={index} className={`result-row ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                            <span className="kana">{result.kana}</span>
                            <span>{result.romaji}</span>
                            <span>{result.userAnswer}</span>
                            <span>{result.isCorrect ? '✓' : '✗'}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="action-buttons">
                <button onClick={restartQuiz}>Try Another Quiz</button>
                <button
                    className="reference-toggle"
                    onClick={() => setShowReference(!showReference)}
                >
                    {showReference ? 'Hide Reference Chart' : 'Show Reference Chart'}
                </button>
            </div>

            {showReference && <ReferenceChart />}
        </div>
    );

    return (
        <div className="katakana-quiz">
            {isConfiguring ? (
                <QuizConfig />
            ) : showSuccess ? (
                <QuizSuccess />
            ) : (
                <>
                    <div className="quiz-stats">
                        <p>Score: {score}/{questionsAnswered}</p>
                        <p>Accuracy: {questionsAnswered > 0 ? Math.round((score/questionsAnswered) * 100) : 0}%</p>
                        <p>Questions Remaining: {quizLength - questionsAnswered}</p>
                    </div>

                    {currentQuestion && (
                        <div className="quiz-question">
                            <h2 className="kana">{currentQuestion.kana}</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={userAnswer}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                    placeholder="Enter romaji..."
                                    autoFocus
                                />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}

                    <button
                        className="reference-toggle"
                        onClick={() => setShowReference(!showReference)}
                    >
                        {showReference ? 'Hide Reference Chart' : 'Show Reference Chart'}
                    </button>

                    {showReference && <ReferenceChart />}

                    {feedback && (
                        <div className={`feedback ${feedback.startsWith('Correct') ? 'correct' : 'incorrect'}`}>
                            {feedback}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default KatakanaQuiz;
