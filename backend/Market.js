const { error } = require('console');
const express = require('express');

const mongoose = require('mongoose');

const app = express();

const cors = require('cors')
app.use(cors())

const superModel = require("./Model/superModel")

app.use(express.json()); 

mongoose.connect("mongodb://localhost:27017/SuperMarket").then(()=>{
    console.log("Database Connected Succesfully")
}).catch((error)=>{
    console.log(error)
})

// get
app.get("/supermarket/get", async (req,res)=>{
    const get = await superModel.find()
    if(get){
        res.send(get)
    }
})
// post
app.post("/supermarket/post", async (req,res)=>{
    const data = superModel(req.body)
    const save = await data.save()
    if(save){
        res.send(save)
    }
})

// update
app.put("/supermarket/update/:id", async(req,res)=>{
    const updateData = await superModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send(updateData)
    }
})

app.get("/supermarket/find/:id", async (req, res) => {
    const singleData = await superModel.find({_id : req.params.id})
    if(singleData)
    res.send(singleData)
  })



// delete
app.delete("/supermarket/delete/:id", async (req,res) => {
    const deleteData = await superModel.deleteOne(
      {_id: req.params.id}
    )
    if(deleteData){
      res.send(deleteData)
    }
  })
  

app.listen(4000 , (req,res)=> console.log("Server is runing on port 4000"));
