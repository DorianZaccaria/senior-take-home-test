// Display trials and the associated country
const printTrials = (trials, country) => {
  for (const trial of trials) {
    /* eslint-disable no-console */
    console.log(`${trial.name}, ${country}`);
    /* eslint-enable no-console */
  }
};

module.exports = {
  printTrials
};
