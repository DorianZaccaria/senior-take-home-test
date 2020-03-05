// imports
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

describe('Routing', () => {
  const url = 'http://localhost:3000';

  describe('Main endpoint', () => {
    const agent = request.agent(url);

    it('Should return the main endpoint message', done => {
      agent.get('/')
        .expect(200)
        .end((err, res) => {
          if (err) {
            throw err;
          }
          expect(res.body.message).to.equal('Hello Inato');
          done();
        });
    });
  });
});
