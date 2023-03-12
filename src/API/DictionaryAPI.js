import axios from "axios";

const DictionaryAPI = () => {
    const options = {
      method: 'GET',
      url: 'https://dictionary35.p.rapidapi.com/wordSearchEnglish',
      params: {query: 'book'},
      headers: {
        'X-RapidAPI-Key': '45bf6776a6msh463e3442df4ac1cp1653d9jsn85578a44ffc8',
        'X-RapidAPI-Host': 'dictionary35.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export default DictionaryAPI;