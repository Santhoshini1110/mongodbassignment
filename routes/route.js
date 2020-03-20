var express=require('express');
var path=express.Router();
const connection=require('../database/db.js');

path.get('/api/student/:id',async(req,res)=>{
    try{
    const result=await connection.find({"id":req.body.id});
    res.send(resullt);
    }
    catch{
        res.send("unable to get students");
    }

});

path.get('/api/students',async(req,res)=>{
    try{
    const result = connection.find();
    res.send(resullt);
    }
    catch{
        res.send("unable to get students");
    }

});

path.post('/api/insert/',async(req,res)=>{
    try{
        var student={
            id:req.body.id,
            name:req.body.name,
            department:req.body.department}
    const result = await connection.insertOne(student);
    res.send(result);
    }
    catch{
        res.send("student with given id cannot be added");
    }

});

path.post('/api/delete/:id',async(req,res)=>{
    try{
    const result = await connection.deleteOne({"id":req.body.id});
    res.send(result);
    }
    catch{
        res.send("student with given id is not found");
    }

});

path.post('/api/update',async(req,res)=>{
    try{
    var student={
        id:req.body.id,
        name:req.body.name,
   
        department:req.body.department}

const result= await connection.updateOne({"id":req.params.id},{$set:student});
    res.send(result);
    }
    catch{
        res.send("student with given id is not found");
    }

});