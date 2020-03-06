// imports
const fs = require('fs');

// Internal imports
const TrialsData = require('../data/trials');
const CountriesData = require('../data/countries');
const Utils = require('../utils/countries');

// Instanciate classes
const trialsData = new TrialsData(JSON.parse(fs.readFileSync('trials.json')));
const countriesData = new CountriesData(
  JSON.parse(fs.readFileSync('countries.json'))
);

// Display trial names and country matching the country code
const getTrialsByCountry = code => {
  const trials =  trialsData.getByCountry(code);
  const country = countriesData.getCountry(code);
  Utils.printTrials(trials, country);
};

module.exports = {
  getTrialsByCountry
};
