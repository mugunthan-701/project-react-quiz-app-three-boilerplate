import React from 'react';

const Result = ({ score, totalQuestions, onBackToHome }) => {
  return (
    <div id='result-main'>
      <div id='result-sec'>
        <h1>RESULT</h1>
        <div id='phrase'>
          <p>Your Score is <span id='score'>{score}</span></p>
        </div>
        <div id='phrase'>
  
        </div>
        <div id='result-btn'>
          <button className='Bottns' onClick={onBackToHome}>BackHome</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
