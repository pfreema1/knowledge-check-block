import React, { Component } from 'react';
import RadioButtonComponent from '../Components/RadioButtonComponent';
import './AnswersContainer.css';
import AnswerComponent from '../Components/AnswerComponent';
import SubmitButtonComponent from '../Components/SubmitButtonComponent';

class AnswerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenAnswerIndex: null
    };
  }

  handleAnswerClick = index => {
    // console.log('index clicked:  ', index);

    this.setState({ chosenAnswerIndex: index });
  };

  render() {
    const { answersArr } = this.props;
    const { chosenAnswerIndex } = this.state;

    return (
      <div>
        <div className="answers-wrapper">
          {answersArr.map((answer, index) => {
            let isChosen = chosenAnswerIndex === index;
            return (
              <AnswerComponent
                key={index}
                index={index}
                answerStr={answer}
                handleAnswerClick={this.handleAnswerClick}
                isChosen={isChosen}
              />
            );
          })}
        </div>
        <SubmitButtonComponent isClickable={chosenAnswerIndex} />
      </div>
    );
  }
}

export default AnswerContainer;
