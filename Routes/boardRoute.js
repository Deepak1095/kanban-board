const express=require("express")
const { boardModel } = require("../Models/Board")
const boardRoute=express.Router()


boardRoute.post("/",async(req,res)=>{
    console.log(req.body)
    try{
        const data= boardModel(req.body)
        await data.save()
        res.status(200).json({msg:"board add successfull"})
    }
    catch(err){ 
        res.status(400).json({msg:err.message})
    }
    
})

boardRoute.get("/",async(req,res)=>{
    try{
        const data=await boardModel.find()
        res.status(200).json({data:data})
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
    
})


module.exports={
    boardRoute
}