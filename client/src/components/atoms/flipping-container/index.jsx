import React, { useState } from 'react';
import './styles.scss';

export default function FlipCard({ front, back }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="flip-card" onClick={() => setFlipped(!flipped)}>
            <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    {front}
                </div>
                <div className="flip-card-back">
                    {back}
                </div>
            </div>
        </div>
    );
}

