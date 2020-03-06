// imports
const chai = require('chai');

const expect = chai.expect;

// Internal imports
const TrialsData = require('../../data/trials');
const Helpers = require('./helpers');

describe('The unit tests for the trials data layer', () => {
  const allTrials = [
    ...Helpers.ongoingInatoTrial,
    ...Helpers.ongoingTotoTrial,
    ...Helpers.invalidTrials
  ];

  const trialsData = new TrialsData(allTrials);

  describe('getAll method', () => {
    it('Should return all trials', done => {
      trialsData.getAll((err, data) => {
        expect(err).to.be.null;
        expect(data).to.be.an('array').that.have.lengthOf(allTrials.length);
        expect(data).to.deep.equal(allTrials);
        done();
      });
    });
  });

  describe('getBySponsor method', () => {
    it('Should only return ongoing trials for the org inato', done => {
      trialsData.getBySponsor('inato', (err, data) => {
        expect(err).to.be.null;
        expect(data).to.be.an('array')
          .that.have.lengthOf(Helpers.ongoingInatoTrial.length);
        expect(data).to.deep.equal(Helpers.ongoingInatoTrial);
        done();
      });
    });

    it('Should only return ongoing trials for the org toto', done => {
      trialsData.getBySponsor('toto', (err, data) => {
        expect(err).to.be.null;
        expect(data).to.be.an('array')
          .that.have.lengthOf(Helpers.ongoingTotoTrial.length);
        expect(data).to.deep.equal(Helpers.ongoingTotoTrial);
        done();
      });
    });
  });
});
