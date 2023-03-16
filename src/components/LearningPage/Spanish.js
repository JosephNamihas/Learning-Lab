import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the Spanish word for "house"?',
    options: ['Casa', 'Perro', 'Coche', 'Comida'],
    answer: 'Casa'
  },
  {
    question: 'What is the Spanish word for "red"?',
    options: ['Azul', 'Rojo', 'Verde', 'Amarillo'],
    answer: 'Rojo'
  },
  {
    question: 'What is the Spanish word for "thank you"?',
    options: ['Gracias', 'Hola', 'Adiós', 'Por favor'],
    answer: 'Gracias'
  }
];

function SpanishQuiz() {
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
          <h1>Spanish Quiz</h1>
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

export default SpanishQuiz;