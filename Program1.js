//testing
const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const apikey = '869744ce';
const title = 'the Avengers';

const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

axios.get(querystr).then( (response) =>{
console.log(response.data.Title);
console.log(response.data.Year);
console.log(response.data.Director);

}
);
