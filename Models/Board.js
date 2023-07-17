const { default: mongoose } = require("mongoose");

const BoardSchema=mongoose.Schema({
    name: String,
    tasks: [
        {
            _id: String,
               title : String,
               description : String,
               status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
               subtask : [
                {
                    _id: String,
                       title : String,
                       isCompleted : Boolean
                   }
               ]
           }
    ]
})

const boardModel=mongoose.model("board",BoardSchema)

module.exports={
    boardModel
}