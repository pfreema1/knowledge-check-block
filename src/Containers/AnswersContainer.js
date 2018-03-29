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
      hasClickedSubmit: false
    };
  }

  handleAnswerClick = index => {
    // console.log('index clicked:  ', index);

    this.setState({ chosenAnswerIndex: index });
  };

  handleSubmitClick = () => {
    if (this.state.chosenAnswerIndex !== null)
      this.setState({ hasClickedSubmit: true });
  };

  render() {
    const { answersArr, correctAnswerIndex } = this.props;
    const { chosenAnswerIndex, hasClickedSubmit } = this.state;

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

        <SubmitButtonComponent
          handleSubmitClick={this.handleSubmitClick}
          hasClickedSubmit={hasClickedSubmit}
          isClickable={chosenAnswerIndex}
        />

        <AnswerResponseComponent
          userChoseCorrectAnswer={userChoseCorrectAnswer}
        />
      </div>
    );
  }
}

export default AnswerContainer;
