// imports
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

describe('The functional tests for the trials endpoint', () => {
  const url = 'http://localhost:3000/api/v1/trials';
  const numberOfTrials = 6;
  const validFields = [
    'name',
    'start_date',
    'end_date',
    'sponsor'
  ];

  describe('GET / - getAll method', () => {
    const agent = request.agent(url);

    it('Should return a json formatted payload', done => {
      agent.get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err) => {
          if (err) throw err;
          done();
        });
    });

    it('Should return all the trials well formatted', done => {
      agent.get('/')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          expect(res.body).to.have.lengthOf(numberOfTrials);
          for (const trial of res.body) {
            expect(trial).to.have.all.keys(validFields);
          }
          done();
        });
    });

  });

  describe('GET /:sponsor - getBySponsor method', () => {
    const agent = request.agent(url);
    const ongoingSanofiTrials = 2;
    const ongoingAstraZenecaTrials = 1;

    it('Should return all ongoing trials for sanofi', done => {
      agent.get('/sanofi')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) throw err;
          expect(res.body).to.have.lengthOf(ongoingSanofiTrials);
          for (const trial of res.body) {
            expect(trial).to.have.all.keys(validFields);
          }
          done();
        });
    });

    it('Should return all ongoing trials for AstraZeneca', done => {
      agent.get('/astrazeneca')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) throw err;
          expect(res.body).to.have.lengthOf(ongoingAstraZenecaTrials);
          for (const trial of res.body) {
            expect(trial).to.have.all.keys(validFields);
          }
          done();
        });
    });
  });
});
