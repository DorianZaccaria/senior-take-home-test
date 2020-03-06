// Handle API return codes and messages
const handleErrors = (err, arg, res) => {
  if (err) {
    res.status(err.status || 500);
    res.json({error: err.error});
  } else {
    res.status(200).json(arg);
  }
};

// Exports
module.exports = {
  handleErrors
};
