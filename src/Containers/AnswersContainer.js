import React, { Component } from 'react';
import RadioButtonComponent from '../Components/RadioButtonComponent';
import './AnswersContainer.css';
import AnswerComponent from '../Components/AnswerComponent';
import SubmitButtonComponent from '../Components/SubmitButtonComponent';

class AnswerContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleAnswerClick = () => {};

  render() {
    const { answersArr } = this.props;

    return (
      <div className="answers-wrapper">
        {answersArr.map((answer, index) => {
          return (
            <AnswerComponent
              answerStr={answer}
              handleAnswerClick={this.handleAnswerClick}
            />
          );
        })}
        <SubmitButtonComponent />
      </div>
    );
  }
}

export default AnswerContainer;
