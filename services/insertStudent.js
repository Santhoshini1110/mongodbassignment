const connection=require('../database/db.js');

 const insertStudent=()=>
 {
     return new Promise((resolve,reject)=>{
         var student={
             id=req.body.id,
             name=req.body.name,
             department=req.body.department
         };
         connection.insertOne(student,function(err,result){
             if(err){
                 reject(err);
             }
             resolve(res);
         })
     })
 }

 module.exports=insertStudent;
 