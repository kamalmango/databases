var models = require('../models');
var mySql = require('mySql');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var count = 1;
var server = mySql.createConnection({
  user: 'root',
  password: '1',
  database: 'chat'
});
module.exports = {
  messages: {
    get: function (req, res) {
      server.query('SELECT * FROM messages', (err, result) => { 
        err ? console.log(err) : console.log(result);
        res.status(200).send(result);
      });
    }, 
    // a function which handles a get request for all messages
    post: function (req, res) {
      var username = req.body.username || '';
      var message = req.body.message || '';
      var roomName = req.body.roomname || '';
      message = message.replace('\'', '\\\'');
      var sqlCommand = 'INSERT INTO messages (userName, text, roomName) VALUES (\'' + username + '\', \'' + message + '\', \'' + roomName + '\')';
      server.query(sqlCommand, (err) => err ? console.log(err) : console.log('input', message));
      count++;
      res.status(200).send();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var username = req.body.username || '';
      var sqlCommand = 'INSERT INTO users (userName )VALUES (\'' + username + '\')';
      server.query(sqlCommand, (err) => err ? console.log(err) : console.log('input'));
      count++;
      res.status(200).send();
    }
  }
};

