import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Ribosomes', 'Endoplasmic reticulum'],
    answer: 'Mitochondria'
  },
  {
    question: 'What is the SI unit of power?',
    options: ['Watt', 'Volt', 'Ohm', 'Ampere'],
    answer: 'Watt'
  },
  {
    question: 'What is the process by which a solid turns into a gas?',
    options: ['Sublimation', 'Condensation', 'Evaporation', 'Melting'],
    answer: 'Sublimation'
  },
];

function Science() {
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
          <h1>Science Quiz Game</h1>
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

export default Science;
