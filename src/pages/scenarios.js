import React from 'react';
import menu from '../images/menu.png'
import './scenarios.css'


const Scenarios = () => {
  return (
    <div className = "title">
      <h1>Real Life Scenarios</h1>
        <div className = "instructions">
        <h2>
          Practice your conversation skills with our voice assistance, Red! Say "I want to practice."
        </h2>
        <div className = 'food'>
            <img src={menu} alt='menu'></img>
        </div>
        </div>
    </div>
  );
};

export default Scenarios;