const mongodb = require('mongodb');
require('dotenv').config();
const MongoClient = mongodb.MongoClient;

const dbURL = process.env.MONGODB_URL;
let _db;

console.log(dbURL);

const mongoConnect = callback => {
  MongoClient.connect(dbURL)
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
