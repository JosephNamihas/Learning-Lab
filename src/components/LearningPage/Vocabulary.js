import React, { useState } from "react";
import axios from "axios";

const WordsApiComponent = () => {
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
      setRandomWord(response.data.word);
      getWordDetails(response.data.word);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    getWordDetails(word);
  };

  return (
    <div>
      <h1>Words API</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={getRandomWord}>Random Word</button>
      <h2>{word}</h2>
      <h3>Definition:</h3>
      <p>{definition}</p>
      <h3>Synonyms:</h3>
      <ul>
        {synonyms.map((synonym) => (
          <li key={synonym}>{synonym}</li>
        ))}
      </ul>
      <h3>Random Word:</h3>
      <p>{randomWord}</p>
    </div>
  );
};

export default WordsApiComponent;
