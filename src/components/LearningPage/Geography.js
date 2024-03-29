import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'What is the longest river in the world?',
    options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
    answer: 'Nile'
  },
  {
    question: 'What is the largest desert in the world?',
    options: ['Sahara', 'Arabian', 'Gobi', 'Kalahari'],
    answer: 'Sahara'
  }
];

function GeographyQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
      setCurrentQuestion(currentQuestion + 1);
      setAnswerStatus(null);
    } else {
      setAnswerStatus('Incorrect. Try again!');
    }
  };

  return (
    <>
      {currentQuestion < questions.length ? (
        <>
          <h1>Geography Quiz</h1>
          <p>{questions[currentQuestion].question}</p>
          <div>
            {questions[currentQuestion].options.map(option => (
              <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
            ))}
          </div>
          {answerStatus && <p>{answerStatus}</p>}
        </>
      ) : (
        <>
          <h1>Quiz Completed!</h1>
          <p>Your score is {score} out of {questions.length}.</p>
        </>
      )}
    </>
  );
}

export default GeographyQuiz;
