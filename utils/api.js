// Handle API return codes and messages
const handleErrors = (err, arg, res) => {
  if (err) {
    res.status(err.status || 500);
    res.json({error: err.error});
  } else {
    res.status(200).json(arg);
  }
};

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

// Exports
module.exports = {
  formatTrials,
  handleErrors
};
