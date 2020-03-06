// Define the datalayer class for the countries
class CountriesData {
  // Set the country list as class variable
  constructor (countries) {
    // Switch from an array of countries to a hash code => name
    const countryHash = {};

    for (const country of countries) {
      countryHash[country.code.toLowerCase()] = country.name;
    }

    this.countries = countryHash;
  }

  // Returns the country name associated to a country code
  getCountry (countryCode) {
    return this.countries[countryCode.toLowerCase()];
  }
}

// Exports
module.exports = CountriesData;
