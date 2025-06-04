import React, { useState } from 'react';
import './css/SentencePractice.scss';

const sentencePatterns = [
    {
        id: 1,
        type: 'fill-blank',
        template: 'わたし_____がくせいです。',
        answer: 'は',
        english: 'I am a student.',
        hint: 'Use は for the topic marker'
    },
    {
        id: 2,
        type: 'word-bank',
        english: 'This is a book',
        words: ['ほん', 'これ', 'は', 'です'],
        correct: ['これ', 'は', 'ほん', 'です'],
        hint: 'Start with これ (this)'
    },
    {
        id: 3,
        type: 'fill-blank',
        template: 'わたし_____にほんご_____べんきょうします。',
        answer: ['は', 'を'],
        english: 'I study Japanese.',
        hint: 'Use は for topic and を for the object'
    },
    {
        id: 4,
        type: 'word-bank',
        english: 'I am from America',
        words: ['アメリカ', 'から', 'です', 'わたし', 'は'],
        correct: ['わたし', 'は', 'アメリカ', 'から', 'です'],
        hint: 'Use から to show origin'
    }
];

const SentencePractice = () => {
    const [currentPattern, setCurrentPattern] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showHint, setShowHint] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [draggedWords, setDraggedWords] = useState([]);
    const [availableWords, setAvailableWords] = useState(
        sentencePatterns[0].type === 'word-bank' ? [...sentencePatterns[0].words] : []
    );

    const checkAnswer = () => {
        const current = sentencePatterns[currentPattern];
        let correct = false;

        if (current.type === 'fill-blank') {
            correct = Array.isArray(current.answer)
                ? userAnswer.split(',').every((ans, i) => ans.trim() === current.answer[i])
                : userAnswer === current.answer;
        } else if (current.type === 'word-bank') {
            correct = draggedWords.join('') === current.correct.join('');
        }

        setIsCorrect(correct);
        if (correct) setScore(score + 1);

        setTimeout(() => {
            if (currentPattern < sentencePatterns.length - 1) {
                setCurrentPattern(currentPattern + 1);
                setUserAnswer('');
                setShowHint(false);
                setIsCorrect(null);
                if (sentencePatterns[currentPattern + 1].type === 'word-bank') {
                    setAvailableWords([...sentencePatterns[currentPattern + 1].words]);
                    setDraggedWords([]);
                }
            }
        }, 2000);
    };

    const handleDragWord = (word) => {
        setDraggedWords([...draggedWords, word]);
        setAvailableWords(availableWords.filter(w => w !== word));
    };

    const resetPattern = () => {
        const current = sentencePatterns[currentPattern];
        if (current.type === 'word-bank') {
            setAvailableWords([...current.words]);
            setDraggedWords([]);
        } else {
            setUserAnswer('');
        }
        setIsCorrect(null);
        setShowHint(false);
    };

    const currentExercise = sentencePatterns[currentPattern];

    return (
        <div className="sentence-practice">
            <div className="practice-info">
                <div className="progress">
                    Exercise {currentPattern + 1} of {sentencePatterns.length}
                    <div className="score">Score: {score}</div>
                </div>
                <div className="english-prompt">{currentExercise.english}</div>
            </div>

            <div className="exercise-container">
                {currentExercise.type === 'fill-blank' ? (
                    <div className="fill-blank-exercise">
                        <div className="template">
                            {currentExercise.template}
                        </div>
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Fill in the blank..."
                        />
                    </div>
                ) : (
                    <div className="word-bank-exercise">
                        <div className="sentence-construction">
                            {draggedWords.map((word, index) => (
                                <div key={index} className="word-block">
                                    {word}
                                </div>
                            ))}
                        </div>
                        <div className="available-words">
                            {availableWords.map((word, index) => (
                                <div
                                    key={index}
                                    className="word-option"
                                    onClick={() => handleDragWord(word)}
                                >
                                    {word}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="controls">
                    <button onClick={checkAnswer}>Check Answer</button>
                    <button onClick={resetPattern}>Reset</button>
                    <button onClick={() => setShowHint(!showHint)}>
                        {showHint ? 'Hide Hint' : 'Show Hint'}
                    </button>
                </div>

                {showHint && (
                    <div className="hint">
                        {currentExercise.hint}
                    </div>
                )}

                {isCorrect !== null && (
                    <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? '正解！ Correct!' : 'Try again!'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SentencePractice;
