// Global imports
const bodyparser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

// Internal imports
const Trials = require('./routes/trials');

// App definition
const app = express();
const logger = morgan('common');

// Add some middleware
app.use(bodyparser.json());
app.use(logger);

// Define some route
app.use('/api/v1/trials', Trials);

// default 404
app.get('*', (req, res) => {
  res.status(404);
  res.json({error: 'Url not found'});
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server listening on localhost port ${port}`);
  /* eslint-disable no-console */
});
