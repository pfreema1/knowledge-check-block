import React from 'react';

const AnswerComponent = ({ answerStr, handleAnswerClick }) => {
  return (
    <div onClick={handleAnswerClick} className="single-answer-wrapper">
      <div className="answer__radio-button" />
      <div className="answer__text">{answerStr}</div>
    </div>
  );
};

export default AnswerComponent;
