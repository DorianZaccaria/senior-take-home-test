// Format trials
const formatTrials = (trials, callback) => {
  let formatedTrials = [];

  for (const trial of trials) {
    formatedTrials.push({
      name: trial.name,
      start_date: trial.start_date,
      end_date: trial.end_date,
      sponsor: trial.sponsor
    });
  }

  callback(null, formatedTrials);
};

// Returns true if trial is ongoing, false otherwise
const isTrialOngoing = trial => {
  // The trial can't be ongoing if it is canceled
  if (trial.canceled)
    return false;

  // The trial can't be ongoing if the start date is in the future or if the end
  // date is in the past.
  const today = new Date;
  const start = new Date(trial.start_date);
  const end = new Date(trial.end_date);

  if (start > today || end < today)
    return false;

  return true;
};

// Exports
module.exports = {
  formatTrials,
  isTrialOngoing
};
