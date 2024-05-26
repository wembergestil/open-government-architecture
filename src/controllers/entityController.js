const db = require('../models');

exports.listEntities = (req, res) => {
  res.send('List of entities');
};

exports.createEntity = (req, res) => {
  res.send('Entity created');
};
