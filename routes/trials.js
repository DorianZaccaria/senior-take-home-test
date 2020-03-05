// imports
const express = require('express');
const async = require('async');
const fs = require('fs');

// Internal imports
const TrialsData = require('../data/trials');
const Utils = require('../utils/api');

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
      Utils.formatTrials(arg, callback);
    }
  ], (err, arg) => Utils.handleErrors(err, arg, res));
});

// Returns all the trials
Trials.get('/', (req, res) => {
  async.waterfall([
    callback => {
      trialsData.getAll(callback);
    },
    (arg, callback) => {
      Utils.formatTrials(arg, callback);
    }
  ], (err, arg) => Utils.handleErrors(err, arg, res));
});

// Exports
module.exports = Trials;
