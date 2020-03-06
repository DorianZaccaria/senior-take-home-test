const ongoingInatoTrial = [{
  name: 'valid trial',
  country: 'FR',
  start_date: '2019-01-01',
  end_date: '2025-08-01',
  sponsor: 'InAto',
  canceled: false,
  study_type: 'interventional',
  primary_purpose: 'treatment'
}];

const ongoingTotoTrial = [{
  name: 'valid trial from another sponsor',
  country: 'ES',
  start_date: '2019-01-01',
  end_date: '2025-08-01',
  sponsor: 'ToTo',
  canceled: false,
  study_type: 'interventional',
  primary_purpose: 'treatment'
}];

const invalidTrials = [
  {
    name: 'old trial',
    country: 'FR',
    start_date: '2018-01-01',
    end_date: '2019-08-01',
    sponsor: 'InAto',
    canceled: false,
    study_type: 'interventional',
    primary_purpose: 'treatment'
  }, {
    name: 'future trial',
    country: 'FR',
    start_date: '2022-01-01',
    end_date: '2025-08-01',
    sponsor: 'InAto',
    canceled: false,
    study_type: 'interventional',
    primary_purpose: 'treatment'
  }, {
    name: 'wrong dates trial',
    country: 'FR',
    start_date: '2022-01-01',
    end_date: '2019-01-01',
    sponsor: 'InAto',
    canceled: false,
    study_type: 'interventional',
    primary_purpose: 'treatment'
  }, {
    name: 'canceled trial',
    country: 'FR',
    start_date: '2019-01-01',
    end_date: '2025-08-01',
    sponsor: 'InAto',
    canceled: true,
    study_type: 'interventional',
    primary_purpose: 'treatment'
  }
];

const formattedInvalidTrials = [
  {
    name: 'old trial',
    start_date: '2018-01-01',
    end_date: '2019-08-01',
    sponsor: 'InAto',
  }, {
    name: 'future trial',
    start_date: '2022-01-01',
    end_date: '2025-08-01',
    sponsor: 'InAto',
  }, {
    name: 'wrong dates trial',
    start_date: '2022-01-01',
    end_date: '2019-01-01',
    sponsor: 'InAto',
  }, {
    name: 'canceled trial',
    start_date: '2019-01-01',
    end_date: '2025-08-01',
    sponsor: 'InAto',
  }
];

module.exports = {
  formattedInvalidTrials,
  invalidTrials,
  ongoingInatoTrial,
  ongoingTotoTrial
};
