// imports
const express = require('express');
const async = require('async');
const fs = require('fs');

// Internal imports
const TrialsData = require('../data/trials');
const ApiUtils = require('../utils/api');
const TrialsUtils = require('../utils/trials');

// Defines the router
const Trials = express.Router();

const trialsData = new TrialsData(JSON.parse(fs.readFileSync('trials.json')));

// Returns all the ongoing trials for a sponsor
Trials.get('/:sponsor', (req, res) => {
  async.waterfall([
    callback => {
      trialsData.getBySponsor(req.params.sponsor, callback);
    },
    (arg, callback) => {
      TrialsUtils.formatTrials(arg, callback);
    }
  ], (err, arg) => ApiUtils.handleErrors(err, arg, res));
});

// Returns all the trials
Trials.get('/', (req, res) => {
  async.waterfall([
    callback => {
      trialsData.getAll(callback);
    },
    (arg, callback) => {
      TrialsUtils.formatTrials(arg, callback);
    }
  ], (err, arg) => ApiUtils.handleErrors(err, arg, res));
});

// Exports
module.exports = Trials;
