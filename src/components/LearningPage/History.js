import React, { useState } from 'react';

const questions = [
  {
    question: 'Who was the first President of the United States?',
    options: ['John Adams', 'Thomas Jefferson', 'George Washington', 'Abraham Lincoln'],
    answer: 'George Washington'
  },
  {
    question: 'Which country was Adolf Hitler born in?',
    options: ['Austria', 'Germany', 'Poland', 'Russia'],
    answer: 'Austria'
  },
  {
    question: 'Which country was the first to send a man to the moon?',
    options: ['Russia', 'USA', 'China', 'France'],
    answer: 'USA'
  }
];

function HistoryQuiz() {
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
          <h1>History Quiz</h1>
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

export default HistoryQuiz;
