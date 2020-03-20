/*const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DBNAME;

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
});
 module.exports=db;   */
 const mongoose=require('mongoose');
 const url = 'mongodb://localhost:27017';
const dbName = 'student';
 mongoose.connect(url);
 mongoose.connection.on('error',err=>{
   if(err)
   console.log("error occured in connection");
   else
   console.log("successfully connected");
 })

 const studentSchema=mongoose.Schema({
   id:{
     type:String,
     required:true
   },
   name:{
     type:String,
     required:true
   },
   department:{
     type:String,
     required:true,
   }
 })
 mongoose.exports=mongoose.model('dbname',studentSchema);