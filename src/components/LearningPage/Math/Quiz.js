import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Form } from "react-bootstrap";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showError, setShowError] = useState(false);

  // Fetch questions from the Open Trivia Database API on component mount
  useEffect(() => {
    axios
      .get(
        "https://magustus.pythonanywhere.com/api/questions/"
      )
      .then((response) => {
        setQuestions(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleOptionChange = (event) => {
    setShowError(false);
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    } else {
      setShowError(true);
    }

    if (currentIndex === questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption("");
    }
  };

  const handleRestart = () => {
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption("");
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple"
      )
      .then((response) => {
        setQuestions(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Quiz</h1>
      {showScore ? (
        <div className="border border-dark p-3 mb-3 text-center">
          <h2>
            Your score: {score}/{questions.length}
          </h2>
          <Button variant="primary" onClick={handleRestart}>
            Restart
          </Button>
        </div>
      ) : (
        <div className="border border-dark p-3 mb-3">
          <h2>{questions[currentIndex]?.question}</h2>
          <Form>
            {questions[currentIndex]?.incorrect_answers?.map((option) => (
              <Form.Check
                type="radio"
                label={option}
                name="quizOption"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                key={option}
              />
            ))}
            <Form.Check
              type="radio"
              label={questions[currentIndex]?.correct_answer}
              name="quizOption"
              value={questions[currentIndex]?.correct_answer}
              checked={
                selectedOption === questions[currentIndex]?.correct_answer
              }
              onChange={handleOptionChange}
              key={questions[currentIndex]?.correct_answer}
            />
          </Form>
          {showError && (
            <div className="text-danger">Sorry, wrong answer. Try again.</div>
          )}
          <Button variant="warning" onClick={handleNextQuestion}
          style={{ backgroundColor: "#ff9900", marginTop: "1rem" }}>
            Next
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Quiz;
