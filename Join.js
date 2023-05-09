const axios = require('axios');
const apikey = '869744ce';
const title = 'the Avengers';

const apikey1 = '07f6e6e630b44d4bac8d9bdcd61e11bf';
var news = '';
let a = 5;


const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

axios.get(querystr).then( (response) =>{
console.log(response.data.Title);
console.log(response.data.Year);
console.log(response.data.Director);
news = response.data.Title;

    const querystr1 = `https://newsapi.org/v2/everything?q=${news}&apiKey=${apikey1}`;

    axios.get(querystr1).then( (response) =>{
    console.log(response.data.articles[0].source.name);
    console.log(response.data.articles[0].author);
    console.log(response.data.articles[0].title);
}
);

}
);