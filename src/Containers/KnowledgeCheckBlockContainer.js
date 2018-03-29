import React, { Component } from 'react';
import './KnowledgeCheckBlockContainer.css';
import QuestionComponent from '../Components/QuestionComponent';
import AnswersContainer from './AnswersContainer';

class KnowledgeCheckBlockContainer extends Component {
  render() {
    const { questionData, questionIndex } = this.props;

    return (
      <div className="knowledge-check-wrapper">
        <QuestionComponent
          questionStr={questionData.question}
          questionImg={questionData.image}
        />
        <AnswersContainer
          answersArr={questionData.answers}
          correctAnswerIndex={questionData.correctAnswerIndex}
        />
      </div>
    );
  }
}

export default KnowledgeCheckBlockContainer;
