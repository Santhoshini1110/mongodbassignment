const connection=require('../database/db.js');

 const insertStudent=async()=>
 {
     
         var student={
             id=req.body.id,
             name=req.body.name,
             department=req.body.department
         };
      return await connection.insertOne(student);
     
 }

 module.exports=insertStudent;
 