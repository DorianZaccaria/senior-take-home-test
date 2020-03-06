// imports
const chai = require('chai');

const expect = chai.expect;

// Internal imports
const TrialsUtils = require('../../utils/trials');
const Helpers = require('./helpers');

describe('The unit tests for the trials utils methods', () => {
  describe('formatTrials method', () => {
    it('Should format the list of trials with the associated country', done => {
      TrialsUtils.formatTrials(Helpers.invalidTrials, (err, data) => {
        expect(data).to.deep.equal(Helpers.formattedInvalidTrials);
        done();
      });
    });
  });

  describe('isTrialOngoing method', () => {
    it('Should return false for all invalid trials', done => {
      for (const trial of Helpers.invalidTrials) {
        expect(TrialsUtils.isTrialOngoing(trial)).to.equal(false);
      }
      done();
    });

    it('Should return true for all ongoing trials', done => {
      const trials = [
        ...Helpers.ongoingInatoTrial,
        ...Helpers.ongoingTotoTrial
      ];
      for (const trial of trials) {
        expect(TrialsUtils.isTrialOngoing(trial)).to.equal(true);
      }
      done();
    });
  });
});
