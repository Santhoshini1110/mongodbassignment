const connection=req('../database/db.js');

const deleteStudent=async()=>
{
    
     return await connection.remove({"id":req.params.id});
}
module.exports=deleteStudent;