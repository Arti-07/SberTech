import React from 'react';
import {useState} from 'react';


import "./counter_styles.css";

export default function Redbutton() {
    const [count, setCount] = useState(0);

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
