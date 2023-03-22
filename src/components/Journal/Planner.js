import React, { useState, useEffect } from "react";
import moment from "moment";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import styles from "./styles.planner.css";

const Planner = () => {
  // Initialize inputValues state to store the input data
  const [inputValues, setInputValues] = useState({});
  const [days, setDays] = useState([]);

  // Function to handle input value changes and update the state, then local storage

  const handleInputChange = (day, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [day]: value
    }));

    localStorage.setItem(day, value);
  };
  // useEffect to set up the component state on initial render
  useEffect(() => {
    const startDate = moment().startOf("month");
    const calculatedDays = [];

    for (let i = 0; i < 31; i++) {
      calculatedDays.push(startDate.clone().add(i, "days"));
    }

    setDays(calculatedDays);
    // Retrieve stored input values from localStorage and update inputValues state
    const storedValues = {};

    calculatedDays.forEach((day) => {
      const date = day.format("YYYY-MM-DD");
      const value = localStorage.getItem(date);
      if (value !== null) {
        storedValues[date] = value;
      }
    });

    setInputValues(storedValues);
  }, []);

  const clearInputField = (date) => {
    setInputValues((prevValues) => {
      // Remove the selected date from the inputValues state
      const newValues = { ...prevValues };
      delete newValues[date];

      return newValues;
    });

    // Remove the stored value from localStorage for the selected date
    localStorage.removeItem(date);
  };
  // Function to render input elements for each day of the month
  const renderInputs = () => {
    return days.map((day) => {
      const date = day.format("YYYY-MM-DD");
      const value = inputValues[date] || "";

      return (
        <Container className="text-area" key={date}>
          <InputGroup>
          <InputGroup.Text className="date">{day.format("ddd, DD")}
          </InputGroup.Text>
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => handleInputChange(date, e.target.value)}
          />
          {/* Add a "Clear" button for each input field that calls the clearInputField function */}
          <Button 
            variant="secondary" 
            id="button-addon2" 
            onClick={() => clearInputField(date)}>Clear
          </Button>
          </InputGroup>
        </Container>
      );
    });
  };
  // Get the current month and year as a string (e.g., "March 2023"
  const currentMonth = moment().format("MMMM YYYY");

  return (
    <Container className="text-center">
      <h1>{currentMonth}</h1>
      {renderInputs()}
    </Container>
  );
};

export default Planner;
