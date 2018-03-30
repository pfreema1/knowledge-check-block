import coffee from './images/coffee.gif';
import espresso from './images/espresso.gif';

export const exampleData = {
  questions: [
    {
      question: 'What is this a picture of?',
      image: coffee,
      answers: ['Cookies and coffee', 'Donuts and cider'],
      correctAnswerIndex: 0,
      answerReinforcement: 'I just love cookies and a warm cup of coffee!'
    },
    {
      question: 'How many cups of coffee can you drink?',
      image: espresso,
      answers: ['10', '11', '42', '38'],
      correctAnswerIndex: 2,
      answerReinforcement: '42 is a great number!'
    }
  ]
};
