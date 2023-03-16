import React from "react";
import $ from "jquery";

const Vocabulary = () => {

var searchWord = "/Computer";

// API CALL
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://wordsapiv1.p.rapidapi.com/words" + searchWord,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "958ecc0b13msh0ca9342a3cd9f49p1a6a0bjsnba6be6199123",
		"X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"
	}
}

$.ajax(settings).done(function (response) {
  console.log(response);
  console.log(response.word); // Word
  console.log(response.syllables.list); // Syllables
  console.log(response.results[0].definition) // Definition

  getDictionaryItem(response);

});

function getDictionaryItem(response) {
  let wordName = $("<h1>").text(response.word);
  let wordSyl = $("<p>").text(response.syllables.list)
  let wordDef = $("<p>").text(response.results[0].definition);

$("#wordName").append(wordName);
$("#wordSyl").append(wordSyl);
$("#wordDef").append(wordDef);
}


return (
<div>

  <button id ="button-search">Search</button>

    <div className="card" style="width: 18rem;">
        <div className="card-body">
          <h5 className="card-title" id="wordName"></h5>
          <h5 className="card-text" id ="wordSyl"></h5>
          <p className="card-text" id="wordDef"></p>
        </div>
      </div>

      <form id="search-form" className="form">
        <div className="form-inline form-group">
          <div className="input-group">
            <button type="button" className="btn search-button" id="search-button">
              Search
            </button>
            <input className="form-input" type="text" id="search-input" placeholder="Word"
              aria-labelledby="form-heading" />
            <div className="input-group-append">
            </div>

          </div>
        </div>
      </form>
</div>
)}

export default Vocabulary;