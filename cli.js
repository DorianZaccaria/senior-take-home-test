// Internal imports
const CountriesLib = require('./lib/countries');

// Display the help for the CLI
const printHelp = () => {
  const help = `
  Usage: node cli.js help
         node cli.js getTrialsByCountry [country code]
  `;
  /* eslint-disable no-console */
  console.log(help);
  /* eslint-enable no-console */
};

// CLI entrypoint
const main = () => {
  const args = process.argv.slice(2);

  switch (args[0]) {
    case 'getTrialsByCountry':
      if (args[1])
        CountriesLib.getTrialsByCountry(args[1]);
      else
        printHelp();

      break;
    default:
      printHelp();
  }
};

main();
