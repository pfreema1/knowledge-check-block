import React, { Component } from 'react';
import './KnowledgeCheckBlockContainer.css';
import QuestionComponent from '../Components/QuestionComponent';

class KnowledgeCheckBlockContainer extends Component {
  render() {
    const { questionData } = this.props;

    return (
      <div className="knowledge-check-wrapper">
        <QuestionComponent
          questionStr={questionData.question}
          questionImg={questionData.image}
        />
      </div>
    );
  }
}

export default KnowledgeCheckBlockContainer;
