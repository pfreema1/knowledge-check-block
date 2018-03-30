import React from 'react';
import Icon from 'react-icons-kit';
import { close } from 'react-icons-kit/ionicons/close';
import { iosRefreshEmpty } from 'react-icons-kit/ionicons/iosRefreshEmpty';

// <Icon icon={iosRefreshEmpty} />;

const AnswerResponseComponent = ({
  userChoseCorrectAnswer,
  answerReinforcementStr
}) => {
  return (
    <div className="answer-response-wrapper animate-response-height">
      <div className="answer-response__result-feedback-wrapper">
        <div className="answer-response__result-feedback--icon-wrapper">
          <Icon size={20} icon={close} />
        </div>
        <p>Incorrect</p>
      </div>
      <div className="answer-response__answer-reinforcement">
        <p>{answerReinforcementStr}</p>
      </div>
      <div className="answer-response__take-again-wrapper">
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
