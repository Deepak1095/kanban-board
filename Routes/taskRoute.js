const express=require("express")
const { TaskModel } = require("../Models/Task")
const taskRoute=express.Router()


taskRoute.post("/",async(req,res)=>{
    try{
        const data= TaskModel(req.body)
        await data.save()
        res.status(200).json({msg:"task add successfull"})
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
    
})

taskRoute.get("/",async(req,res)=>{
    try{
        const data=await TaskModel.find(res.body.id)
        res.status(200).json({msg:data})
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
    
})


module.exports={
    taskRoute
}