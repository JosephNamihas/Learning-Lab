import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Form, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

const Quiz = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showError, setShowError] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  useEffect(() => {
    axios
      .get("https://magustus.pythonanywhere.com/api/categories/")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Fetching categories failed:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(`https://magustus.pythonanywhere.com/api/questions/?category=${selectedCategory}`)
        .then((response) => {
          setQuestions(response.data);
          setCurrentIndex(0);
          setScore(0);
          setShowScore(false);
          setSelectedOption("");
          setShowError(false);
          setShowCorrectAnswer(false);
        })
        .catch((error) => {
          console.error("Fetching questions failed:", error);
        });
    }
  }, [selectedCategory]);

  const handleOptionChange = (event) => {
    setShowError(false);
    setSelectedOption(event.target.value);
    setShowCorrectAnswer(false);
  };

  const handleNextQuestion = () => {
    const correctOption = `option_${questions[currentIndex].correct_option.toLowerCase()}`;
    if (selectedOption === correctOption) {
      setScore(score + 1);
    } else {
      setShowError(true);
    }
    setShowCorrectAnswer(true);

    setTimeout(() => {
      setShowCorrectAnswer(false);
      if (currentIndex === questions.length - 1) {
        setShowScore(true);
      } else {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption("");
        setShowError(false);
      }
    }, 2000); // Show correct answer for 2 seconds
  };

  const handleCategoryChange = (code) => {
    setSelectedCategory(code);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-5">Quiz</h1>
          <DropdownButton id="dropdown-basic-button" title="Select Category">
            {categories.map((category) => (
              <Dropdown.Item key={category.id} onClick={() => handleCategoryChange(category.code)}>
                {category.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          {showScore ? (
            <div className="border border-dark p-3 mb-3 text-center">
              <h2>
                Your score: {score}/{questions.length}
              </h2>
              <Button variant="primary" onClick={() => setSelectedCategory("")}>
                Choose another category
              </Button>
            </div>
          ) : (
            <div className="border border-dark p-3 mb-3">
              <h2>{questions[currentIndex]?.text}</h2>
              <Form>
                {questions[currentIndex] && renderOptions(questions[currentIndex], handleOptionChange, selectedOption)}
              </Form>
              {showError && (
                <div className="text-danger">Sorry, wrong answer. Try again or proceed to the next question.</div>
              )}
              <Button variant="warning" onClick={handleNextQuestion} style={{ backgroundColor: "#ff9900", marginTop: "1rem" }}>
                Next
              </Button>
            </div>
          )}
        </Col>
        {showCorrectAnswer && (
          <Col md={4}>
            <div className="border border-success p-3">
              <h4>Correct Answer</h4>
              <p>{questions[currentIndex]?.[`option_${questions[currentIndex]?.correct_option.toLowerCase()}`]}</p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

function renderOptions(question, handleOptionChange, selectedOption) {
  return ['a', 'b', 'c', 'd'].map((optionLetter) => {
    const optionKey = `option_${optionLetter}`;
    return (
      <Form.Check
        type="radio"
        label={question[optionKey]}
        name="quizOption"
        value={optionKey}
        checked={selectedOption === optionKey}
        onChange={handleOptionChange}
        key={optionLetter}
      />
    );
  });
};

export default Quiz;

