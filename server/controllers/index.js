var models = require('../models');
var mySql = require('mySql');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var server = mySql.createConnection({
  user: 'root',
  password: '1',
  database: 'chatter'
});
var db = new Sequelize('chatter', 'root', '1');
var User = db.define('Users', {
  username: Sequelize.STRING
});

var Message = db.define('messages', {
  id: { 
    type: Sequelize.INTEGER,
    primaryKey: true 
  },
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING,
});

module.exports = {
  messages: {
    get: function (req, res) {
      server.query('SELECT * FROM Messages', (err, result) => { 
        err ? console.log(err) : console.log(result);
        res.status(200).send(result);
      });
    }, 
    // a function which handles a get request for all messages
    post: function (req, res) {
      var messageObj = {
        username: req.body.username || '',
        text: req.body.text || '',
        roomname: req.body.roomname || ''     
      };
      db.sync().then(function() {
        return Message.create(messageObj);
      });
      res.status(200).send();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var username = req.body.username || '';
      var userObj = {
        username: req.body.username || ''
      };
      User.create(userObj);
      res.status(200).send();
    }
  }
};

