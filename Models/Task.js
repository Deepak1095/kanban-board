const { default: mongoose } = require("mongoose");

const TaskSchema=mongoose.Schema([
        {
               title : String,
               description : String,
               status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
           }
    ]
)

const TaskModel=mongoose.model("task",TaskSchema)

module.exports={
    TaskModel
}
