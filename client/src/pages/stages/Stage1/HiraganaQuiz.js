import React, { useState } from 'react';
import './css/HiraganaQuiz.scss';
import { HiraganaCharacters } from "../../../util/data/characters";
import { updateCharacterProgress } from '../../../util/progression-stage1';

const hiraganaSet = [
    // Existing vowels, k, s, t, n, and h groups
    { kana: "あ", romaji: "a" },   { kana: "い", romaji: "i" },   { kana: "う", romaji: "u" },
    { kana: "え", romaji: "e" },   { kana: "お", romaji: "o" },   { kana: "か", romaji: "ka" },
    { kana: "き", romaji: "ki" },  { kana: "く", romaji: "ku" },  { kana: "け", romaji: "ke" },
    { kana: "こ", romaji: "ko" },  { kana: "さ", romaji: "sa" },  { kana: "し", romaji: "shi" },
    { kana: "す", romaji: "su" },  { kana: "せ", romaji: "se" },  { kana: "そ", romaji: "so" },
    { kana: "た", romaji: "ta" },  { kana: "ち", romaji: "chi" }, { kana: "つ", romaji: "tsu" },
    { kana: "て", romaji: "te" },  { kana: "と", romaji: "to" },  { kana: "な", romaji: "na" },
    { kana: "に", romaji: "ni" },  { kana: "ぬ", romaji: "nu" },  { kana: "ね", romaji: "ne" },
    { kana: "の", romaji: "no" },  { kana: "は", romaji: "ha" },  { kana: "ひ", romaji: "hi" },
    { kana: "ふ", romaji: "fu" },  { kana: "へ", romaji: "he" },  { kana: "ほ", romaji: "ho" },
    // Adding m-group
    { kana: "ま", romaji: "ma" },  { kana: "み", romaji: "mi" },  { kana: "む", romaji: "mu" },
    { kana: "め", romaji: "me" },  { kana: "も", romaji: "mo" },
    // Adding y-group
    { kana: "や", romaji: "ya" },  { kana: "ゆ", romaji: "yu" },  { kana: "よ", romaji: "yo" },
    // Adding r-group
    { kana: "ら", romaji: "ra" },  { kana: "り", romaji: "ri" },  { kana: "る", romaji: "ru" },
    { kana: "れ", romaji: "re" },  { kana: "ろ", romaji: "ro" },
    // Adding w-group
    { kana: "わ", romaji: "wa" },  { kana: "を", romaji: "wo" },
    // Adding n
    { kana: "ん", romaji: "n" }
];

// Update hiraganaGroups to include new groups
const hiraganaGroups = {
    vowels: hiraganaSet.slice(0, 5),
    k: hiraganaSet.slice(5, 10),
    s: hiraganaSet.slice(10, 15),
    t: hiraganaSet.slice(15, 20),
    n: hiraganaSet.slice(20, 25),
    h: hiraganaSet.slice(25, 30),
    m: hiraganaSet.slice(30, 35),
    y: hiraganaSet.slice(35, 38),
    r: hiraganaSet.slice(38, 43),
    w: hiraganaSet.slice(43, 45),
    extra: hiraganaSet.slice(45) // for ん
};

// Update this function to use the imported updateCharacterProgress
const updateProgression = async (character) => {
    try {
        await updateCharacterProgress(character, 1); // Award 1 XP for correct answer
    } catch (error) {
        console.error('Error updating character progress:', error);
    }
};

const HiraganaQuiz = () => {
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
    const [remainingCharacters, setRemainingCharacters] = useState([]);
    const [quizResults, setQuizResults] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
        const question = remainingCharacters[randomIndex];
        // Remove the used character from remaining characters
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
        // Combine selected groups into active character set
        const selectedChars = Object.entries(selectedGroups)
            .filter(([_, isSelected]) => isSelected)
            .flatMap(([group]) => hiraganaGroups[group]);

        if (selectedChars.length === 0) {
            setFeedback('Please select at least one character group');
            return;
        }

        // Set quiz length to minimum of selected length or available characters
        const availableLength = Math.min(quizLength, selectedChars.length);
        setQuizLength(availableLength);

        // Initialize remaining characters with all selected characters
        setRemainingCharacters(selectedChars);

        const firstQuestion = selectedChars[Math.floor(Math.random() * selectedChars.length)];
        setRemainingCharacters(prev => prev.filter(char => char !== firstQuestion));

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
            updateProgression(currentQuestion.kana);
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

    const handleAnswer = async () => {
        if (!currentQuestion) return;

        const isCorrect = userAnswer.toLowerCase() === currentQuestion.romaji.toLowerCase();

        if (isCorrect) {
            setScore(prev => prev + 1);
            setFeedback('Correct!');
            setShowSuccess(true);
            // Award XP for correct answer
            await updateCharacterProgress(currentQuestion.kana, 2); // Award 2 XP for each correct answer
        } else {
            setFeedback(`Incorrect. The answer was ${currentQuestion.romaji}`);
            setShowSuccess(false);
        }

        // Add to quiz results
        setQuizResults(prev => [...prev, {
            character: currentQuestion.kana,
            userAnswer: userAnswer,
            correctAnswer: currentQuestion.romaji,
            isCorrect
        }]);

        setUserAnswer('');
        setQuestionsAnswered(prev => prev + 1);

        // Check if quiz is complete
        if (questionsAnswered + 1 >= quizLength || remainingCharacters.length === 0) {
            setCurrentQuestion(null);
            setIsConfiguring(true);
        } else {
            setCurrentQuestion(getRandomQuestion());
        }

        // Hide feedback after 2 seconds
        setTimeout(() => {
            setFeedback('');
            setShowSuccess(false);
        }, 2000);
    };

    const QuizConfig = () => (
        <div className="quiz-config">
            <h2>Configure Your Quiz</h2>
            <div className="group-selection">
                <h3>Select Character Groups:</h3>
                {Object.entries(hiraganaGroups).map(([group, chars]) => (
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
                                .flatMap(([group]) => hiraganaGroups[group]);
                            const maxLength = selectedChars.length;
                            const newValue = Math.min(parseInt(e.target.value), maxLength);
                            setQuizLength(newValue);
                        }}
                    />
                    <span className="max-length-info">
                        (Max: {Object.entries(selectedGroups)
                            .filter(([_, isSelected]) => isSelected)
                            .flatMap(([group]) => hiraganaGroups[group]).length} characters)
                    </span>
                </label>
            </div>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );

    const ReferenceChart = () => (
        <div className="reference-chart">
            <h3>Hiragana Reference</h3>
            <div className="chart-grid">
                {Object.entries(hiraganaGroups).map(([group, chars]) => (
                    <div key={group} className="chart-group">
                        <h4>{group.toUpperCase()}</h4>
                        {chars.map(char => (
                            <div key={char.kana} className="chart-item">
                                <span className="kana">{char.kana}</span>
                                <span className="romaji">{char.romaji}</span>
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
        <div className="hiragana-quiz">
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

export default HiraganaQuiz;

