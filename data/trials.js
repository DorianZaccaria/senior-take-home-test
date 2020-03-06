// Internal imports
const Utils = require('../utils/trials');

// Define the datalayer class for the trials
class TrialsData {
  // Load the file once when the class is instanciated
  constructor (trials) {
    this.trials = trials;
  }

  // Get all the trials
  getAll (callback) {
    callback(null, this.trials);
  }

  // Get ongoing trials by filter
  _get (passFilter) {
    let ongoingTrials = [];

    for (const trial of this.trials) {
      // We skip the trial if it does not pass the filter
      if (!passFilter(trial))
        continue;

      // We skip the trial if it is not ongoing
      if (!Utils.isTrialOngoing(trial))
        continue;

      // At this point the trial is valid
      ongoingTrials.push(trial);
    }

    return ongoingTrials;
  }

  // Get all ongoing trials for a specific sponsor
  getBySponsor (sponsor, callback) {
    const sanitizedSponsor = sponsor.toLowerCase();
    const passFilter = trial => {
      if (trial.sponsor.toLowerCase() !== sanitizedSponsor)
        return false;

      return true;
    };

    callback(null, this._get(passFilter));
  }

  // Get ongoing trials by countries
  getByCountry (countryCode) {
    const sanitizedCountryCode = countryCode.toLowerCase();
    const passFilter = trial => {
      if (trial.country.toLowerCase() === sanitizedCountryCode)
        return true;

      return false;
    };

    return this._get(passFilter);
  }
}

// Exports
module.exports = TrialsData;
