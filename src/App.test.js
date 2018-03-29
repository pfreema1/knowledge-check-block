import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exampleData as data } from './Data';
import KnowledgeCheckBlockContainer from './Containers/KnowledgeCheckBlockContainer';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('the app', () => {
  const numOfQuestions = data.questions.length;
  const numOfAnswers = data.questions.reduce((prevVal, question) => {
    return question.answers.length + prevVal;
  }, 0);

  it('should render the correct amount of questions', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.knowledge-check-wrapper').length).toBe(
      numOfQuestions
    );
  });

  it('each QuestionComponent should receive at least one question string or image', () => {
    expect(
      data.questions.find(questionEl => {
        if (questionEl.question === null && questionEl.image === null) {
          return true;
        }
      })
    ).toBeUndefined();
  });

  it('should render correct amount of answers', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.single-answer-wrapper').length).toBe(numOfAnswers);
  });
});
