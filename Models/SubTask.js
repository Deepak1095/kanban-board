const { default: mongoose } = require("mongoose");

const SubTaskSchema=mongoose.Schema( [
                {
                       title : String,
                       isCompleted : Boolean
                   }
               ]
)

const subTaskModel=mongoose.model("subTask",SubTaskSchema)

module.exports={
    subTaskModel
}