import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the French word for "hello"?',
    options: ['Bonjour', 'Au revoir', 'Merci', 'Oui'],
    answer: 'Bonjour'
  },
  {
    question: 'What is the French word for "cat"?',
    options: ['Chien', 'Chat', 'Cheval', 'Oiseau'],
    answer: 'Chat'
  },
  {
    question: 'What is the French word for "goodbye"?',
    options: ['Bonsoir', 'Bonne nuit', 'À bientôt', 'Au revoir'],
    answer: 'Au revoir'
  }
];

function FrenchQuiz() {
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
          <h1>French Quiz</h1>
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

export default FrenchQuiz;
