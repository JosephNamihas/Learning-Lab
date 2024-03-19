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

  // Fetch questions from the API on component mount
  useEffect(() => {
    axios
      .get("https://magustus.pythonanywhere.com/api/questions/")
      .then((response) => {
        setQuestions(response.data); // Assuming the API response directly contains the array of questions
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
    if (selectedOption === `option_${questions[currentIndex].correct_option.toLowerCase()}`) {
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
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption("");
    setShowError(false);
    // Fetch the questions again to restart the quiz
    axios
      .get("https://magustus.pythonanywhere.com/api/questions/")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderOptions = (question) => {
    return ['a', 'b', 'c', 'd'].map((option) => (
      <Form.Check
        type="radio"
        label={question[`option_${option}`]}
        name="quizOption"
        value={`option_${option}`}
        checked={selectedOption === `option_${option}`}
        onChange={handleOptionChange}
        key={option}
      />
    ));
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
          <h2>{questions[currentIndex]?.text}</h2>
          <Form>
            {questions[currentIndex] && renderOptions(questions[currentIndex])}
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
