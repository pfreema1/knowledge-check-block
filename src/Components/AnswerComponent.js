import React from 'react';

const AnswerComponent = ({ answerStr, handleAnswerClick, index, isChosen }) => {
  return (
    <div
      onClick={handleAnswerClick.bind(null, index)}
      className="single-answer-wrapper"
    >
      <div className="answer__radio-button">
        <div
          className={
            'answer__radio-button--select-indicator ' +
            (isChosen ? 'show-indicator' : 'hide-indicator')
          }
        />
      </div>
      <div className="answer__text">{answerStr}</div>
    </div>
  );
};

export default AnswerComponent;
