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

  // Get all ongoing trials for a specific sponsor
  getBySponsor (sponsor, callback) {
    let ongoingTrials = [];
    const today = new Date;
    const sanitizedSponsor = sponsor.toLowerCase();

    for (const trial of this.trials) {
      const sanitizedTrialSponsor = trial.sponsor.toLowerCase();

      // We skip the trial if the it is canceled or if it does not belong to the
      // sponsor.
      if (trial.canceled || sanitizedTrialSponsor !== sanitizedSponsor)
        continue;

      // We skip the trials if it is not ongoing
      const start = new Date(trial.start_date);
      const end = new Date(trial.end_date);

      if (start > today || end < today)
        continue;

      // At this point the trial is valid
      ongoingTrials.push(trial);
    }

    callback(null, ongoingTrials);
  }
}

// Exports
module.exports = TrialsData;
