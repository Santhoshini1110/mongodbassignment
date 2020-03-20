var express=require('express');
var path=express.Router();
//var conn=require('../main.js');
//var MongoClient=require('mongodb').MongoClient;
//var assert=require('assert');
const getStudentById=require('../services/getStudentById');
const getStudents=require('../services/getStudent.js');
const insertStudent=require('../services/insertstudent.js');
const updateStudent=require('../services/updateStudent.js');
const deleteStudent=require('../services/deleteStudent.js');


path.get('/api/student/:id',async(req,res)=>{
    try{
    const result=await getStudentById();
    res.send(resullt);
    }
    catch{
        res.send("unable to get students");
    }

});

path.get('/api/student',async(req,res)=>{
    try{
    const result = await getStudents();
    res.send(resullt);
    }
    catch{
        res.send("unable to get students");
    }

});

path.post('/api/insert/',async(req,res)=>{
    try{
    const result = await insertStudent();
    res.send(result);
    }
    catch{
        res.send("student with given id cannot be added");
    }

});

path.post('/api/delete/:id',async(req,res)=>{
    try{
    const result = await deleteStudent();
    res.send(result);
    }
    catch{
        res.send("student with given id is not found");
    }

});

path.post('/api/update',async(req,res)=>{
    try{
    const result = await updateStudent();
    res.send(result);
    }
    catch{
        res.send("student with given id is not found");
    }

});

path.use((err, req, res, next) => {
    if (err) {
        res.send('error occoured')
    }
});

modules.export=path;