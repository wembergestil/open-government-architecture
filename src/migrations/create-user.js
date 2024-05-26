const { Sequelize } = require('sequelize');
const sequelize = require('../models').sequelize;
const User = require('../models/user');

sequelize.sync({ force: true }).then(() => {
  console.log('User table created successfully!');
}).catch((error) => {
  console.error('Unable to create table:', error);
});
