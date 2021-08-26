//require request
const request = require('request');

//request info about a cat
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback('breed not found', null);
      return;
    }
    callback(null, data[0]['description']);
  });
};

//export function
module.exports = { fetchBreedDescription };




