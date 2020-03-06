// imports
const chai = require('chai');

const expect = chai.expect;

// Internal imports
const ApiUtils = require('../../utils/api');

describe('The unit tests for the api helpers', () => {
  describe('handleErrors method', () => {
    let code = 0;
    let obj = null;

    const res = {
      status (statusCode)  {
        code = statusCode;
        return this;
      },
      json (jsonObject) {
        obj = jsonObject;
        return this;
      }
    };

    describe('Error object is not null', () => {
      const simpleError = {error: 'bad error'};

      it('Should return an error with the default code if the error is not null', done => {
        ApiUtils.handleErrors(simpleError, {}, res);
        expect(code).to.equal(500);
        expect(obj).to.deep.equal(simpleError);
        done();
      });

      it('Should return an error with the custum code if error code is defined', done => {
        const customError = {error: 'bad error', status: 400};
        ApiUtils.handleErrors(customError, {}, res);
        expect(code).to.equal(400);
        expect(obj).to.deep.equal(simpleError);
        done();
      });
    });

    describe('Error object is null', () => {
      const simpleObject = {message: 'Hello'};

      it('Should return the given object with status code 200', done => {
        ApiUtils.handleErrors(null, simpleObject, res);
        expect(code).to.equal(200);
        expect(obj).to.deep.equal(simpleObject);
        done();
      });

      it('Should return the given object with status code 200 if error is not defined', done => {
        ApiUtils.handleErrors(undefined, simpleObject, res);
        expect(code).to.equal(200);
        expect(obj).to.deep.equal(simpleObject);
        done();
      });
    });
  });
});
