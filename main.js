var express=require('express');
var app=express();

app.use(express.json());
//const bodyparser=require('body-parser');
//app.use(bodyparser);

var conn=require('./database/db.js');
var routes=require('./routes/route.js');
//require(dotenv).config();
app.use(routes);
//conn.connect(function(){
  //  console.log("connection established")
//});
app.listen(3000,function(){
    console.log("u r in port 3000");
})
module.exports=conn;