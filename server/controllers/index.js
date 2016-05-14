var models = require('../models');
var connection = require('../db/index');
var mySql = require('mySql');


module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: (req, res) => models.messages.get((err, result) => err ? console.log(err) : res.status(200).send(result)), 
    // a function which handles posting a message to the database
    post: (req, res) => models.messages.post({username: req.body.username || 'placeholder', text: req.body.text || 'wuhhh', roomname: req.body.roomname || 'default'}, res)
  },
  users: {
    get: (req, res) => models.users.get((err, result) => err ? console.log(err) : res.status(200).send(result)),
    post: (req, res) => models.users.post({username: req.body.username || 'placeholder'}, res)
  }
};

