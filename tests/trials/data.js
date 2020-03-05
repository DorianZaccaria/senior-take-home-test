// imports
const chai = require('chai');

const expect = chai.expect;

// Internal imports
const TrialsData = require('../../data/trials');

describe('The unit tests for the trials data layer', () => {
  const ongoingInatoTrial = [{
    name: 'valid trial',
    country: 'FR',
    start_date: '2019-01-01',
    end_date: '2025-08-01',
    sponsor: 'InAto',
    canceled: false,
    study_type: 'interventional',
    primary_purpose: 'treatment'
  }];

  const ongoingTotoTrial = [{
    name: 'valid trial from another sponsor',
    country: 'ES',
    start_date: '2019-01-01',
    end_date: '2025-08-01',
    sponsor: 'ToTo',
    canceled: false,
    study_type: 'interventional',
    primary_purpose: 'treatment'
  }];

  const invalidTrials = [
    {
      name: 'old trial',
      country: 'FR',
      start_date: '2018-01-01',
      end_date: '2019-08-01',
      sponsor: 'InAto',
      canceled: false,
      study_type: 'interventional',
      primary_purpose: 'treatment'
    }, {
      name: 'future trial',
      country: 'FR',
      start_date: '2022-01-01',
      end_date: '2025-08-01',
      sponsor: 'InAto',
      canceled: false,
      study_type: 'interventional',
      primary_purpose: 'treatment'
    }, {
      name: 'wrong dates trial',
      country: 'FR',
      start_date: '2022-01-01',
      end_date: '2019-01-01',
      sponsor: 'InAto',
      canceled: false,
      study_type: 'interventional',
      primary_purpose: 'treatment'
    }, {
      name: 'canceled trial',
      country: 'FR',
      start_date: '2019-01-01',
      end_date: '2025-08-01',
      sponsor: 'InAto',
      canceled: true,
      study_type: 'interventional',
      primary_purpose: 'treatment'
    }
  ];

  const allTrials = [
    ...ongoingInatoTrial,
    ...ongoingTotoTrial,
    ...invalidTrials
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
        expect(data).to.be.an('array').that.have.lengthOf(ongoingInatoTrial.length);
        expect(data).to.deep.equal(ongoingInatoTrial);
        done();
      });
    });

    it('Should only return ongoing trials for the org toto', done => {
      trialsData.getBySponsor('toto', (err, data) => {
        expect(err).to.be.null;
        expect(data).to.be.an('array').that.have.lengthOf(ongoingTotoTrial.length);
        expect(data).to.deep.equal(ongoingTotoTrial);
        done();
      });
    });
  });
});
