//require request
const request = require('request');

//accept info from commandline
const ID = process.argv[2];

//request info about a cat
request(`https://api.thecatapi.com/v1/images/search?breed_id=${ID}`, (error, response, body) => {
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
  console.log(data);
  console.log(data[0]);
});
