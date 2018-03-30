import React from 'react';
import Icon from 'react-icons-kit';
import { close } from 'react-icons-kit/ionicons/close';
import { checkmark } from 'react-icons-kit/ionicons/checkmark';
import { iosRefreshEmpty } from 'react-icons-kit/ionicons/iosRefreshEmpty';

const AnswerResponseComponent = ({
  userChoseCorrectAnswer,
  answerReinforcementStr,
  handleTakeAgainClick
}) => {
  return (
    <div className="answer-response-wrapper">
      <div className="answer-response__result-feedback-wrapper">
        <div className="answer-response__result-feedback--icon-wrapper">
          {userChoseCorrectAnswer ? (
            <Icon
              style={{ color: 'RGBA(119, 124, 127, 1.00)' }}
              size={20}
              icon={checkmark}
            />
          ) : (
            <Icon size={20} icon={close} />
          )}
        </div>
        {userChoseCorrectAnswer ? <p>Correct</p> : <p>Incorrect</p>}
      </div>
      <div className="answer-response__answer-reinforcement">
        <p>{answerReinforcementStr}</p>
      </div>
      <div
        onClick={handleTakeAgainClick}
        className="answer-response__take-again-wrapper"
      >
        <Icon
          className="answer-response__refresh-icon"
          size={30}
          icon={iosRefreshEmpty}
        />
        <p>TAKE AGAIN</p>
      </div>
    </div>
  );
};

export default AnswerResponseComponent;
