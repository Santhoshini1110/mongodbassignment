const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DBNAME;

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
});
 module.exports=db;