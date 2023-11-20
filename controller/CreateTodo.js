const Todo = require("../models/Todo");

//define route handler

exports.createTodo= async( req,res )=>{
    try{
        //extract title and desc from req body
        const {title,description}=req.body;

        //create todo obj and insert in db
        const response = await Todo.create({title,description});

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created successfully",
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        console.log("error aagya boss");
        res.status(500)
        .json({
            success:false,
            data:"internal sever error",
            message:err.message,
        })

    }
}