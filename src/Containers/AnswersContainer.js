import React, { Component } from 'react';
import RadioButtonComponent from '../Components/RadioButtonComponent';
import './AnswersContainer.css';
import AnswerComponent from '../Components/AnswerComponent';
import SubmitButtonComponent from '../Components/SubmitButtonComponent';
import AnswerResponseComponent from '../Components/AnswerResponseComponent';

class AnswerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenAnswerIndex: null,
      hasClickedSubmit: false,
      setSubmitButtonDisplay: false
    };
  }

  handleAnswerClick = index => {
    this.setState({ chosenAnswerIndex: index });
  };

  handleSubmitClick = () => {
    if (this.state.chosenAnswerIndex !== null)
      this.setState({ hasClickedSubmit: true });
  };

  handleSubmitButtonTransitionEnd = () => {
    if (this.state.hasClickedSubmit) {
      this.setState({ setSubmitButtonDisplay: true });
    }
  };

  handleTakeAgainClick = () => {
    this.setState({
      chosenAnswerIndex: null,
      hasClickedSubmit: false,
      setSubmitButtonDisplay: false
    });
  };

  render() {
    const {
      answersArr,
      correctAnswerIndex,
      answerReinforcementStr
    } = this.props;
    const {
      chosenAnswerIndex,
      hasClickedSubmit,
      setSubmitButtonDisplay
    } = this.state;

    const userChoseCorrectAnswer = correctAnswerIndex === chosenAnswerIndex;

    return (
      <div>
        <div className="answers-wrapper">
          {answersArr.map((answer, index) => {
            let isChosen = chosenAnswerIndex === index;
            let isCorrectAnswer = index === correctAnswerIndex;

            return (
              <AnswerComponent
                key={index}
                index={index}
                answerStr={answer}
                handleAnswerClick={this.handleAnswerClick}
                isChosen={isChosen}
                hasClickedSubmit={hasClickedSubmit}
                isCorrectAnswer={isCorrectAnswer}
              />
            );
          })}
        </div>
        <div
          className={
            'foo ' + (hasClickedSubmit ? 'animate-response-height' : '')
          }
        >
          {setSubmitButtonDisplay && (
            <AnswerResponseComponent
              userChoseCorrectAnswer={userChoseCorrectAnswer}
              answerReinforcementStr={answerReinforcementStr}
              handleTakeAgainClick={this.handleTakeAgainClick}
            />
          )}

          <SubmitButtonComponent
            handleSubmitClick={this.handleSubmitClick}
            hasClickedSubmit={hasClickedSubmit}
            isClickable={chosenAnswerIndex}
            handleSubmitButtonTransitionEnd={
              this.handleSubmitButtonTransitionEnd
            }
            setSubmitButtonDisplay={setSubmitButtonDisplay}
          />
        </div>
      </div>
    );
  }
}

export default AnswerContainer;
