import React, { Component } from 'react';
import KnowledgeCheckBlockContainer from './Containers/KnowledgeCheckBlockContainer';
import { exampleData as data } from './Data';

class App extends Component {
  render() {
    return (
      <div>
        {data.questions.map((question, index) => {
          return (
            <div key={index}>
              <KnowledgeCheckBlockContainer questionData={question} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
