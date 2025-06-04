import React, { useState } from 'react';

import { vocabularyData } from "../../../util/basic-vocab";

import './css/BasicVocabFlipCards.scss';

// const vocabularyData = {
//     nouns: [
//         { japanese: 'やさい', english: 'vegetable', example: 'やさいを たべます' },
//         { japanese: 'みず', english: 'water', example: 'みずを のみます' },
//         { japanese: 'ともだち', english: 'friend', example: 'ともだちが います' },
//         { japanese: 'がっこう', english: 'school', example: 'がっこうに いきます' },
//         { japanese: 'ほん', english: 'book', example: 'ほんを よみます' },
//         { japanese: 'いぬ', english: 'dog', example: 'いぬが います' },
//         { japanese: 'ねこ', english: 'cat', example: 'ねこが すき です' },
//         { japanese: 'でんわ', english: 'telephone', example: 'でんわを つかいます' }
//     ],
//     verbs: [
//         { japanese: 'たべる', english: 'to eat', example: 'ごはんを たべます' },
//         { japanese: 'のむ', english: 'to drink', example: 'おちゃを のみます' },
//         { japanese: 'いく', english: 'to go', example: 'うちに いきます' },
//         { japanese: 'する', english: 'to do', example: 'べんきょうを します' },
//         { japanese: 'みる', english: 'to see/watch', example: 'えいがを みます' },
//         { japanese: 'よむ', english: 'to read', example: 'ほんを よみます' },
//         { japanese: 'かく', english: 'to write', example: 'てがみを かきます' }
//     ],
//     adjectives: [
//         { japanese: 'おおきい', english: 'big', example: 'おおきい いえ です' },
//         { japanese: 'ちいさい', english: 'small', example: 'ちいさい いぬ です' },
//         { japanese: 'おいしい', english: 'delicious', example: 'おいしい たべもの です' },
//         { japanese: 'たのしい', english: 'fun', example: 'たのしい パーティー です' },
//         { japanese: 'むずかしい', english: 'difficult', example: 'むずかしい しけん です' },
//         { japanese: 'やさしい', english: 'easy/kind', example: 'やさしい せんせい です' }
//     ]
// };

const BasicVocabFlipCards = () => {
    const [currentCategory, setCurrentCategory] = useState('nouns');
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [showExample, setShowExample] = useState(false);

    const handleNextCard = () => {
        if (currentCardIndex < vocabularyData[currentCategory].length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
        } else {
            setCurrentCardIndex(0);
        }
        setIsFlipped(false);
        setShowExample(false);
    };

    const handlePreviousCard = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
        } else {
            setCurrentCardIndex(vocabularyData[currentCategory].length - 1);
        }
        setIsFlipped(false);
        setShowExample(false);
    };

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setShowExample(false);
    };

    const currentCard = vocabularyData[currentCategory][currentCardIndex];

    return (
        <div className="vocab-flashcards">
            <div className="category-selection">
                <button
                    className={`category-btn ${currentCategory === 'nouns' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('nouns')}
                >
                    Nouns
                </button>
                <button
                    className={`category-btn ${currentCategory === 'verbs' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('verbs')}
                >
                    Verbs
                </button>
                <button
                    className={`category-btn ${currentCategory === 'adjectives' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('adjectives')}
                >
                    Adjectives
                </button>
            </div>

            <div className="card-progress">
                Card {currentCardIndex + 1} of {vocabularyData[currentCategory].length}
            </div>

            <div
                className={`flashcard ${isFlipped ? 'flipped' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="card-inner">
                    <div className="card-front">
                        <div className="japanese-text">{currentCard.japanese}</div>
                    </div>
                    <div className="card-back">
                        <div className="english-text">{currentCard.english}</div>
                    </div>
                </div>
            </div>

            <button
                className="example-btn"
                onClick={() => setShowExample(!showExample)}
            >
                {showExample ? 'Hide Example' : 'Show Example'}
            </button>

            {showExample && (
                <div className="example-sentence">
                    <p className="japanese">{currentCard.example}</p>
                </div>
            )}

            <div className="navigation-buttons">
                <button onClick={handlePreviousCard}>Previous</button>
                <button onClick={handleNextCard}>Next</button>
            </div>

            <div className="keyboard-hints">
                <p>Tip: Use left/right arrow keys to navigate, spacebar to flip card</p>
            </div>
        </div>
    );
};

export default BasicVocabFlipCards;
