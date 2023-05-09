const axios = require('axios');


const news = 'Penang';
const key = '07f6e6e630b44d4bac8d9bdcd61e11bf';

const querystr = `https://newsapi.org/v2/everything?q=${news}&from=2023-03-17&sortBy=publishedAt&apiKey=${key}`;

axios.get(querystr).then( (response) =>{
console.log(response.data.articles[0].source.name);
console.log(response.data.articles[0].author);
console.log(response.data.articles[0].description);
}
);