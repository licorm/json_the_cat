//require breedfetcher
const { fetchBreedDescription } = require('./breedFetcher');

//accept info from commandline
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});