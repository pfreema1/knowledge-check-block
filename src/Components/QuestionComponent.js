import React from 'react';

const QuestionComponent = ({ questionStr, questionImg }) => {
  return (
    <div className="question__wrapper">
      {questionStr && (
        <div className="question__text-wrapper">
          <p>{questionStr}</p>
        </div>
      )}

      {questionImg && (
        <div className="question__image-wrapper">
          <img src={questionImg} alt="coffee" />
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
