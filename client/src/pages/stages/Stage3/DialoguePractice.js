import React, { useState } from 'react';
import './css/DialoguePractice.scss';

const dialogues = [
    {
        id: 1,
        scenario: 'Meeting someone for the first time',
        conversation: [
            { speaker: 'A', text: 'こんにちは。', translation: 'Hello.' },
            { speaker: 'B', text: 'こんにちは。', translation: 'Hello.' },
            {
                speaker: 'A',
                text: 'はじめまして。わたしは[Name]です。',
                translation: 'Nice to meet you. I am [Name].',
                options: [
                    'はじめまして。わたしはTanakaです。',
                    'さようなら',
                    'ありがとうございます'
                ],
                correct: 0
            },
            {
                speaker: 'B',
                text: 'よろしくおねがいします。',
                translation: 'Nice to meet you (Please treat me well).',
                options: [
                    'わかりません',
                    'よろしくおねがいします',
                    'おやすみなさい'
                ],
                correct: 1
            }
        ]
    },
    {
        id: 2,
        scenario: 'Ordering at a restaurant',
        conversation: [
            { speaker: 'Server', text: 'いらっしゃいませ。', translation: 'Welcome.' },
            {
                speaker: 'Customer',
                text: 'すみません。',
                translation: 'Excuse me.',
                options: [
                    'こんばんは',
                    'すみません',
                    'さようなら'
                ],
                correct: 1
            },
            {
                speaker: 'Server',
                text: 'ご注文は？',
                translation: 'What would you like to order?'
            },
            {
                speaker: 'Customer',
                text: 'ラーメンをおねがいします。',
                translation: 'Ramen, please.',
                options: [
                    'ラーメンをおねがいします',
                    'ありがとうございます',
                    'はい、そうです'
                ],
                correct: 0
            }
        ]
    }
];

const DialoguePractice = () => {
    const [currentDialogue, setCurrentDialogue] = useState(0);
    const [currentLine, setCurrentLine] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [dialogueComplete, setDialogueComplete] = useState(false);

    const handleAnswer = (optionIndex) => {
        const currentConversation = dialogues[currentDialogue].conversation[currentLine];
        setSelectedAnswer(optionIndex);

        if (optionIndex === currentConversation.correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentLine < dialogues[currentDialogue].conversation.length - 1) {
                setCurrentLine(currentLine + 1);
                setSelectedAnswer(null);
                setShowTranslation(false);
            } else {
                setDialogueComplete(true);
            }
        }, 1500);
    };

    const startNewDialogue = () => {
        if (currentDialogue < dialogues.length - 1) {
            setCurrentDialogue(currentDialogue + 1);
            setCurrentLine(0);
            setShowTranslation(false);
            setSelectedAnswer(null);
            setDialogueComplete(false);
        }
    };

    const restartPractice = () => {
        setCurrentDialogue(0);
        setCurrentLine(0);
        setShowTranslation(false);
        setSelectedAnswer(null);
        setScore(0);
        setDialogueComplete(false);
    };

    const currentConversation = dialogues[currentDialogue].conversation[currentLine];

    return (
        <div className="dialogue-practice">
            <div className="scenario-info">
                <h2>Scenario: {dialogues[currentDialogue].scenario}</h2>
                <div className="progress">
                    Line {currentLine + 1} of {dialogues[currentDialogue].conversation.length}
                </div>
            </div>

            <div className="dialogue-container">
                <div className="conversation-history">
                    {dialogues[currentDialogue].conversation.slice(0, currentLine + 1).map((line, index) => (
                        <div key={index} className={`dialogue-line ${line.speaker === 'A' ? 'left' : 'right'}`}>
                            <div className="speaker">Speaker {line.speaker}</div>
                            <div className="text">{line.text}</div>
                            {showTranslation && (
                                <div className="translation">{line.translation}</div>
                            )}
                        </div>
                    ))}
                </div>

                {currentConversation.options ? (
                    <div className="response-options">
                        <p>Choose your response:</p>
                        {currentConversation.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(index)}
                                className={`option-button ${
                                    selectedAnswer === index 
                                        ? index === currentConversation.correct 
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
                ) : (
                    <button
                        className="continue-button"
                        onClick={() => setCurrentLine(currentLine + 1)}
                    >
                        Continue
                    </button>
                )}

                <button
                    className="translation-toggle"
                    onClick={() => setShowTranslation(!showTranslation)}
                >
                    {showTranslation ? 'Hide' : 'Show'} Translation
                </button>
            </div>

            {dialogueComplete && (
                <div className="dialogue-complete">
                    <h3>Dialogue Complete!</h3>
                    <p>You got {score} correct responses!</p>
                    {currentDialogue < dialogues.length - 1 ? (
                        <button onClick={startNewDialogue}>Next Dialogue</button>
                    ) : (
                        <button onClick={restartPractice}>Practice Again</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default DialoguePractice;
