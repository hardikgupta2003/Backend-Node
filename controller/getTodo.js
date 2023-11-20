// import the model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async (req,res)=>{
    try{
        // fetch all todo from db 
        const todos=await Todo.find({});

        // response 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message: " Saari Ki Saari  Entries le aaye ji"
        });

    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Nahi laa Paye Jii"
        });
    }
}