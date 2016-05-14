var mySql = require('mysql');
var Sequelize = require('sequelize');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.server = mySql.createConnection({
  user: 'root',
  password: '1',
  database: 'chatter'
});

exports.db = new Sequelize('chatter', 'root', '1');

exports.User = exports. db.define('users', {
  username: Sequelize.STRING
});

exports.Message = exports.db.define('messages', {
  id: { 
    type: Sequelize.INTEGER,
    primaryKey: true 
  },
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING,
});