import React from 'react';
import Icon from 'react-icons-kit';
import { checkmark } from 'react-icons-kit/ionicons/checkmark';
import { close } from 'react-icons-kit/ionicons/close';

//<Icon icon={close} />;
// <Icon icon={checkmark} />;

const AnswerComponent = ({
  answerStr,
  handleAnswerClick,
  index,
  isChosen,
  hasClickedSubmit,
  isCorrectAnswer
}) => {
  return (
    <div
      onClick={handleAnswerClick.bind(null, index)}
      className={
        'single-answer-wrapper ' +
        (hasClickedSubmit ? 'no-click' : 'single-answer-wrapper--hover-class')
      }
    >
      <div className="answer__radio-button">
        <div
          className={
            'answer__radio-button--select-indicator ' +
            (isChosen && !hasClickedSubmit
              ? 'show-indicator'
              : 'hide-indicator')
          }
        />
        {isCorrectAnswer ? (
          <Icon
            size={12}
            className={
              'checkmark-icon ' + (hasClickedSubmit ? 'show-with-delay' : '')
            }
            icon={checkmark}
          />
        ) : (
          <Icon
            size={12}
            className={
              'close-icon ' + (hasClickedSubmit ? 'show-with-delay' : '')
            }
            icon={close}
          />
        )}
      </div>
      <div className="answer__text">{answerStr}</div>
      {isChosen && (
        <span
          className={
            'correct-answer-outline ' +
            (hasClickedSubmit ? 'correct-answer-outline-anim' : '')
          }
        />
      )}
    </div>
  );
};

export default AnswerComponent;
