import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";
import './styles.vocabulary.css';

const Vocabulary = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [randomWord, setRandomWord] = useState("");

  const API_KEY = "958ecc0b13msh0ca9342a3cd9f49p1a6a0bjsnba6be6199123";

  // Function to fetch definition & synonyms
  const getWordDetails = async (word) => {
    try {
      const response = await axios.get(
        `https://wordsapiv1.p.rapidapi.com/words/${word}`,
        {
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          },
        }
      );
      setDefinition(response.data.results[0].definition);
      setSynonyms(response.data.results[0].synonyms);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to fetch a random word
  const getRandomWord = async () => {
    try {
      const response = await axios.get(
        "https://wordsapiv1.p.rapidapi.com/words/?random=true",
        {
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          },
        }
      );
      const randomWordReceived = response.data.word;
      setRandomWord(randomWordReceived); // Set the random word state
      setWord(randomWordReceived); // Update the displayed word state with the new random word
      getWordDetails(randomWordReceived); // Fetch the details of the new random word
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    getWordDetails(word);
  };

  // Function to capitlise
  const makeUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  console.log(definition);
  return (
    <div>
    <Container className="py -5 wrapper text-center justify-content-center"></Container>
    <div className="words-form">
      <Container className="py -5 wrapper text-center justify-content-center">
      <h1 className="words-title">English Corner</h1>
      <Form onSubmit={handleSearch}>
        <Form.Group>
          <Form.Control
          type="text"
          placeholder="Enter a word"
          value={makeUpperCase(word)}
          onChange={(e) => setWord(e.target.value)}
        />

        <Button style={{width: "10rem"}} className="words-submit" type="submit">Search</Button>
       
      <Button style={{width: "10rem"}} className="words-random" onClick={getRandomWord}>Random Word</Button>

      <h2 className="bold">Definition:</h2>
      <p>{makeUpperCase(definition)}</p>
      <h2 className="bold">Synonyms:</h2>
      <ul>
        {synonyms.map((synonym) => (
          <li key={makeUpperCase(synonym)}>{makeUpperCase(synonym)}</li>
        ))}
      </ul>
      
      <h2 className="bold">Random Word:</h2>
      <p>{makeUpperCase(randomWord)}</p> 


      </Form.Group>
    </Form>
  </Container>
    </div>
  </div>
  );
};

export default Vocabulary;