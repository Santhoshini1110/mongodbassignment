var connection=require('../database/db.js');

const getStudent=async ()=>
{
    
        return await connection.find({"id":req.params.id});


}

module.exports=getStudent;

