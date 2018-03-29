import React, { Component } from 'react';
import RadioButtonComponent from '../Components/RadioButtonComponent';
import './AnswerContainer.css';

class AnswerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasBeenSubmitted: false,
      isChosen: false,
      isCorrect: null
    };
  }

  handleClick = () => {};

  render() {
    const { hasBeenSubmitted, isChosen, isCorrect } = this.state;

    return (
      <div onClick={this.handleClick}>
        <RadioButtonComponent
          hasBeenSubmitted={hasBeenSubmitted}
          isChosen={isChosen}
          isCorrect={isCorrect}
        />
      </div>
    );
  }
}

export default AnswerContainer;
