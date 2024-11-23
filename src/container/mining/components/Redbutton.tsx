import React from 'react';
import { useState } from 'react'; //useState - это хук, который позволяет управлять состоянием компонента.

import './Counter.css';

export default function Redbutton() {
    const [count, setCount] = useState(0);
    //count - состояние, которое изначально равно нулю.
    //setCount – функция, которая обновляет значение состояния count.

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="counter-container">
            <p className="counter-value">Current count: {count}</p>
            <div className="button-container">
                <button className="bigRedButton" onClick={handleClick}></button>
            </div>
        </div>
    );
}
