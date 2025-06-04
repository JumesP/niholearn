import React, { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    horizontalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './css/SentenceBuilder.scss';

const sentenceExercises = [
    {
        id: 1,
        english: "I eat sushi",
        parts: ["わたし", "は", "すし", "を", "たべます"],
        correctOrder: ["わたし", "は", "すし", "を", "たべます"],
    },
    {
        id: 2,
        english: "The student studies Japanese",
        parts: ["がくせい", "は", "にほんご", "を", "べんきょうします"],
        correctOrder: ["がくせい", "は", "にほんご", "を", "べんきょうします"],
    },
    {
        id: 3,
        english: "I go to school",
        parts: ["わたし", "は", "がっこう", "に", "いきます"],
        correctOrder: ["わたし", "は", "がっこう", "に", "いきます"],
    },
    {
        id: 4,
        english: "The teacher reads a book",
        parts: ["せんせい", "は", "ほん", "を", "よみます"],
        correctOrder: ["せんせい", "は", "ほん", "を", "よみます"],
    }
];

const SortableItem = ({ id }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="sentence-part"
            {...attributes}
            {...listeners}
        >
            {id}
        </div>
    );
};

const SentenceBuilder = () => {
    const [currentExercise, setCurrentExercise] = useState(0);
    const [currentParts, setCurrentParts] = useState([...sentenceExercises[0].parts]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [showHint, setShowHint] = useState(false);
    const [completedExercises, setCompletedExercises] = useState([]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setCurrentParts((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
                const newArray = arrayMove(items, oldIndex, newIndex);
                checkAnswer(newArray);
                return newArray;
            });
        }
    };

    const checkAnswer = (parts) => {
        const isCorrect = parts.every(
            (part, index) => part === sentenceExercises[currentExercise].correctOrder[index]
        );
        setIsCorrect(isCorrect);

        if (isCorrect) {
            setTimeout(() => {
                if (currentExercise < sentenceExercises.length - 1) {
                    setCompletedExercises([...completedExercises, sentenceExercises[currentExercise]]);
                    setCurrentExercise(currentExercise + 1);
                    setCurrentParts([...sentenceExercises[currentExercise + 1].parts]);
                    setIsCorrect(null);
                    setShowHint(false);
                } else {
                    setCompletedExercises([...completedExercises, sentenceExercises[currentExercise]]);
                }
            }, 1500);
        }
    };

    const resetExercise = () => {
        setCurrentParts([...sentenceExercises[currentExercise].parts]);
        setIsCorrect(null);
        setShowHint(false);
    };

    const showHintHandler = () => {
        setShowHint(true);
    };

    if (completedExercises.length === sentenceExercises.length) {
        return (
            <div className="sentence-builder">
                <div className="completion-screen">
                    <h2>おめでとう！ Congratulations! 🎉</h2>
                    <p>You've completed all the sentence building exercises!</p>

                    <div className="review-section">
                        <h3>Review your sentences:</h3>
                        {completedExercises.map((exercise, index) => (
                            <div key={index} className="review-item">
                                <p className="english">{exercise.english}</p>
                                <p className="japanese">{exercise.correctOrder.join(" ")}</p>
                            </div>
                        ))}
                    </div>

                    <button
                        className="restart-button"
                        onClick={() => {
                            setCurrentExercise(0);
                            setCurrentParts([...sentenceExercises[0].parts]);
                            setCompletedExercises([]);
                            setIsCorrect(null);
                            setShowHint(false);
                        }}
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="sentence-builder">
            <div className="exercise-container">
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${(completedExercises.length / sentenceExercises.length) * 100}%` }}
                    ></div>
                </div>

                <h3 className="english-prompt">{sentenceExercises[currentExercise].english}</h3>

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <div className="sentence-parts">
                        <SortableContext
                            items={currentParts}
                            strategy={horizontalListSortingStrategy}
                        >
                            {currentParts.map((part) => (
                                <SortableItem key={part} id={part} />
                            ))}
                        </SortableContext>
                    </div>
                </DndContext>

                <div className="controls">
                    <button onClick={resetExercise} className="reset-button">Reset</button>
                    <button onClick={showHintHandler} className="hint-button">Show Hint</button>
                </div>

                {showHint && (
                    <div className="hint">
                        <p>Remember: Japanese sentences follow Subject-Object-Verb (SOV) order</p>
                        <p>Particles は mark the topic, を marks the direct object</p>
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

export default SentenceBuilder;
