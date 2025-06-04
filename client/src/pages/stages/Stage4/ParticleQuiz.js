import React, { useState } from 'react';
import './css/ParticleQuiz.scss';

const particleQuestions = [
    {
        sentence: "わたし_____がくせいです。",
        options: ["は", "を", "が", "に"],
        correct: "は",
        english: "I am a student.",
        explanation: "は (wa) is used to mark the topic of the sentence."
    },
    {
        sentence: "ほん_____よみます。",
        options: ["は", "を", "が", "に"],
        correct: "を",
        english: "I read a book.",
        explanation: "を (wo) marks the direct object (what is being read)."
    },
    {
        sentence: "がっこう_____いきます。",
        options: ["は", "を", "が", "に"],
        correct: "に",
        english: "I go to school.",
        explanation: "に (ni) marks the destination."
    },
    {
        sentence: "わたし_____いぬ_____います。",
        options: ["は...が", "が...を", "を...に", "に...は"],
        correct: "は...が",
        english: "I have a dog.",
        explanation: "は marks the topic, が marks the subject in existence sentences."
    },
    {
        sentence: "せんせい_____えんぴつ_____あります。",
        options: ["は...が", "が...を", "を...に", "に...は"],
        correct: "は...が",
        english: "The teacher has a pencil.",
        explanation: "は marks the topic, が marks the subject in existence sentences."
    }
];

const ParticleQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizComplete, setQuizComplete] = useState(false);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (answer) => {
        if (selectedAnswer !== null) return; // Prevent multiple answers

        const correct = answer === particleQuestions[currentQuestionIndex].correct;
        setSelectedAnswer(answer);
        setShowExplanation(true);

        const newAnswer = {
            question: particleQuestions[currentQuestionIndex].sentence,
            userAnswer: answer,
            correctAnswer: particleQuestions[currentQuestionIndex].correct,
            isCorrect: correct,
            english: particleQuestions[currentQuestionIndex].english,
            explanation: particleQuestions[currentQuestionIndex].explanation
        };

        setAnswers([...answers, newAnswer]);

        if (correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < particleQuestions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null);
                setShowExplanation(false);
            } else {
                setQuizComplete(true);
            }
        }, 2000);
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowExplanation(false);
        setSelectedAnswer(null);
        setQuizComplete(false);
        setAnswers([]);
    };

    if (quizComplete) {
        return (
            <div className="particle-quiz">
                <div className="quiz-complete">
                    <h2>Quiz Complete! 🎉</h2>
                    <p>Your score: {score}/{particleQuestions.length}</p>

                    <div className="answers-review">
                        <h3>Review Your Answers:</h3>
                        {answers.map((answer, index) => (
                            <div key={index} className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
                                <p className="japanese">{answer.question}</p>
                                <p className="english">{answer.english}</p>
                                <p className="result">
                                    Your answer: {answer.userAnswer}
                                    {!answer.isCorrect && ` (Correct: ${answer.correctAnswer})`}
                                </p>
                                <p className="explanation">{answer.explanation}</p>
                            </div>
                        ))}
                    </div>

                    <button onClick={restartQuiz} className="restart-button">Try Again</button>
                </div>
            </div>
        );
    }

    const currentQuestion = particleQuestions[currentQuestionIndex];

    return (
        <div className="particle-quiz">
            <div className="quiz-progress">
                <p>Question {currentQuestionIndex + 1} of {particleQuestions.length}</p>
                <p>Score: {score}</p>
            </div>

            <div className="question-container">
                <p className="english-hint">{currentQuestion.english}</p>
                <p className="question">{currentQuestion.sentence}</p>

                <div className="options">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            className={`option ${
                                selectedAnswer === option 
                                    ? option === currentQuestion.correct 
                                        ? 'correct' 
                                        : 'incorrect'
                                    : ''
                            }`}
                            disabled={selectedAnswer !== null}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {showExplanation && (
                    <div className={`explanation ${selectedAnswer === currentQuestion.correct ? 'correct' : 'incorrect'}`}>
                        <p>{currentQuestion.explanation}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ParticleQuiz;
