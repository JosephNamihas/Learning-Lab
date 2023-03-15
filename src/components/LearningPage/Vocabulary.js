import React from "react";
// import $ from "jquery";

{/*}
function Vocabulary() {
{
  return (
    <div>
    <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title" id="wordName"></h5>
            <p className="card-text" id="wordDef"></p>
          </div>
        </div>
  
        <form id="search-form" className="form">
          <div className="form-inline form-group">
            <div className="input-group">
              <button type="button" className="btn search-button" id="search-button" aria-label="submit search">
                Search
              </button>
              <input className="form-input" type="text" id="search-input" placeholder="Word"
                aria-labelledby="form-heading" />
              <div className="input-group-append">
              </div>
  
            </div>
          </div>
        </form> </div>
  )
}

// JS

var searchWord = "Computer";

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://wordsapiv1.p.rapidapi.com/words/" + searchWord,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "958ecc0b13msh0ca9342a3cd9f49p1a6a0bjsnba6be6199123",
		"X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"
	}

};

$.ajax(settings).done(function (response) {
  console.log(response);
	console.log(response.word); // Word
  console.log(response.results[0].definition) // Definition

  getDictionaryItem(response);

});

function getDictionaryItem(response) {
  let wordName = $("<h1>").text(response.word);
  let wordDef = $("<p>").text(response.results[0].definition);


$("#wordName").append(wordName);
$("#wordDef").append(wordDef);
}

export default Vocabulary;

export default Vocabulary; */}