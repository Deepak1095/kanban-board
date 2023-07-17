const express=require("express")
const { connection } = require("./db")
const { boardRoute } = require("./Routes/boardRoute")
const { taskRoute } = require("./Routes/taskRoute")
const { subTaskRoute } = require("./Routes/subTask")
const cors=require("cors")


const app=express()
app.use(cors())
app.use(express.json())
app.use("/",boardRoute)
app.use("/task",taskRoute)
app.use("/subTask",subTaskRoute)


app.listen(9000,async()=>{
    try{
        await connection
        console.log("Server is running")
    }
    catch(err){
console.log(err.message)    }
})