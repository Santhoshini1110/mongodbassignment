var express=require('express');
var path=express.Router;
//var conn=require('../main.js');
//var MongoClient=require('mongodb').MongoClient;
//var assert=require('assert');
const getStudents=require('../services/getStudent.js');
const insertStudent=require('../services/insertstudent.js');
const updateStudent=require('../services/updateStudent.js');
const deleteStudent=require('../services/deleteStudent.js');
const test = (req, res, next) => {
    if (req.params.id === 'err') {
        next(err);
    }
    next();
}
path.get('/:id',test,async(req,res)=>{
    try{
    const result = await getStudents();
    res.send(resullt);
    }
    catch{
        res.send("student with given id is not found");
    }

});

path.post('/insert/:id',test,async(req,res)=>{
    try{
    const result = await insertStudent();
    res.send(result);
    }
    catch{
        res.send("user with given id exists");
    }

});

path.post('/delete/:id',test,(req,res)=>{
    try{
    const result = await deleteStudent();
    res.send(result);
    }
    catch{
        res.send("student with given id is not found");
    }

});

path.post('/update/:id',test,async(req,res)=>{
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