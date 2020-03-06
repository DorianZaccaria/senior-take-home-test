// imports
const chai = require('chai');

const expect = chai.expect;

// Internal imports
const CountriesUtils = require('../../utils/countries');
const Helpers = require('../helpers');

describe('The unit tests for the countries utils methods', () => {
  describe('printTrials method', () => {
    const trials = [
      {
        name: 'one',
        stuff: 'stuff',
      }, {
        name: 'two',
        stuff: 'stuff',
      }
    ];
    const country = 'Atlantis';
    const getResult = () => {
      let res = [];
      for (const trial of trials) {
        res.push(`${trial.name}, ${country}`);
      }
      return res.join('\n') + '\n';
    };

    it('Should format the list of trials with the associated country', done => {
      Helpers.captureOutput();
      CountriesUtils.printTrials(trials, country);
      Helpers.restoreOutput();
      expect(Helpers.getOutput()).to.equal(getResult());
      done();
    });
  });
});
