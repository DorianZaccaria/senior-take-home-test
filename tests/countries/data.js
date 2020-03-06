// imports
const chai = require('chai');

const expect = chai.expect;

// Internal imports
const CountriesData = require('../../data/countries');

describe('The unit tests for the countries data layer', () => {
  const france = {
    name: 'France',
    code: 'Fr'
  };
  const spain = {
    name: 'Spain',
    code: 'ES'
  };
  const countries = [france, spain];
  const countriesData = new CountriesData(countries);

  describe('getCountry method', () => {
    it('Should return the right country name France', done => {
      for (const code of [france.code, 'fr', 'FR', 'fR']) {
        expect(countriesData.getCountry(code)).to.equal(france.name);
      }
      done();
    });

    it('Should return the right country name Spain', done => {
      for (const code of [spain.code, 'es', 'Es', 'eS']) {
        expect(countriesData.getCountry(code)).to.equal(spain.name);
      }
      done();
    });
  });
});
