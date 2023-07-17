const express=require("express")
const { subTaskModel } = require("../Models/SubTask")
const subTaskRoute=express.Router()


subTaskRoute.post("/",async(req,res)=>{
    try{
        const data= subTaskModel(req.body)
        await data.save()
        res.status(200).json({msg:"subTaskRoute add successfull"})
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
    
})

subTaskRoute.get("/",async(req,res)=>{
    try{
        const data=await subTaskModel.find(res.body.id)
        res.status(200).json({msg:data})
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
    
})


module.exports={
    subTaskRoute
}