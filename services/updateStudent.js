const connection=require('../database/db.js');

const updateStudent=async()=>
{   
        var student={
            id=req.body.id,
            name=req.body.name,
            department=req.body.department
        };
  return await connection.updateOne({"id":req.params.id},{$set:student});

}

module.exports=updateStudent;