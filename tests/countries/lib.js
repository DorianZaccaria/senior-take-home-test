// imports
const chai = require('chai');

const expect = chai.expect;

// Internal imports
const CountriesLib = require('../../lib/countries');
const Helpers = require('../helpers');

describe('The functional tests for the countries library', () => {
  describe('Get trials by country', () => {
    const trialsInFrance = `Olaparib + Sapacitabine in BRCA Mutant Breast Cancer, France
Topical Calcipotriene Treatment for Breast Cancer Immunoprevention, France
`;
    const trialsInGermany = 'Neratinib +/- Fulvestrant in HER2+, ER+ Metastatic Breast Cancer, Germany\n';

    const runTest = code => {
      Helpers.captureOutput();
      CountriesLib.getTrialsByCountry(code);
      Helpers.restoreOutput();
    };

    it('Should return the right ongoing trials in France', done => {
      runTest('fr');
      expect(Helpers.getOutput()).to.equal(trialsInFrance);
      done();
    });

    it('Should return the right ongoing trials in Spain', done => {
      runTest('es');
      expect(Helpers.getOutput()).to.equal('');
      done();
    });

    it('Should return the right ongoing trials in Germany', done => {
      runTest('de');
      expect(Helpers.getOutput()).to.equal(trialsInGermany);
      done();
    });
  });
});
