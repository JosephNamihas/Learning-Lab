import axios from "axios";

function WordsAPI() {


const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback',
  headers: {
    'X-RapidAPI-Key': '45bf6776a6msh463e3442df4ac1cp1653d9jsn85578a44ffc8',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

export default WordsAPI;