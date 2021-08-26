//require request
const request = require('request');

//accept info from commandline
const breed = process.argv[2];

//request info about a cat
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(`There was an error with your request. Error: ${error}\n`);
    return;
  }
  console.log('No error! Error information:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('Breed not found!');
    return;
  }
  console.log(data[0]);
});
