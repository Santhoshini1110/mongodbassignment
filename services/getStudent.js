var connection=require('../database/db.js');

const getStudent=async ()=>
{
    
        return await connection.find();


}

module.exports=getStudent;

