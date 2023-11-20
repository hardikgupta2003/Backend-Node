const mongoose = require("mongoose");
// description of your data is schema
const todoSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        CreatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        UpdatedAt:{ 
            type:Date,
            required:true,
            default:Date.now(),
        },

    }
);

module.exports=mongoose.model("Todo",todoSchema);