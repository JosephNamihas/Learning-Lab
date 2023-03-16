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

document.getElementById("search-button").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("search-input").innerHTML = "Hello World";
}

return (


 <div>

<button id ="button-search">Search</button>

    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" id="wordName"></h5>
          <h5 class="card-text" id ="wordSyl"></h5>
          <p class="card-text" id="wordDef"></p>
        </div>
      </div>

      <form id="search-form" class="form">
        <div class="form-inline form-group">
          <div class="input-group">
            <button type="button" class="btn search-button" id="search-button">
              Search
            </button>
            <input class="form-input" type="text" id="search-input" placeholder="Word"
              aria-labelledby="form-heading" />
            <div class="input-group-append">
            </div>

          </div>
        </div>
      </form>
</div>
)}

export default Vocabulary;