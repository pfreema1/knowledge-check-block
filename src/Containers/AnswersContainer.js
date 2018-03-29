import React, { Component } from 'react';
import RadioButtonComponent from '../Components/RadioButtonComponent';
import './AnswersContainer.css';
import AnswerComponent from '../Components/AnswerComponent';
import SubmitButtonComponent from '../Components/SubmitButtonComponent';

class AnswerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasChosenAnswer: false
    };
  }

  handleAnswerClick = () => {};

  render() {
    const { answersArr } = this.props;
    const { hasChosenAnswer } = this.state;

    return (
      <div>
        <div className="answers-wrapper">
          {answersArr.map((answer, index) => {
            return (
              <AnswerComponent
                key={index}
                answerStr={answer}
                handleAnswerClick={this.handleAnswerClick}
              />
            );
          })}
        </div>
        <SubmitButtonComponent isClickable={hasChosenAnswer} />
      </div>
    );
  }
}

export default AnswerContainer;
