var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: cb => db.server.query('SELECT * FROM messages', cb),
    // a function which can be used to insert a message into the database
    post: (messageObj, res) => {
      db.db.sync()
      .then(() => db.Message.create(messageObj))
      .then(() => res.status(201).send());
    } 
  },
  users: {
    get: cb => db.server.query('SELECT * FROM users', cb),
    post: (messageObj, res) => {
      db.User.create()
      .then(() => res.status(201).send());
    }
  }
};

