// import the model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async (req,res)=>{
    try{
        // fetch  todo by id from db 
        const id=req.params.id;
        
        const todo=await Todo.findByIdAndDelete({_id: id }
        );

        // response 
        if(!todo){
            return res.status(404).json({
                success:false,
                message:`No data found and deleted with given Id { ${id}}`,
            })
        }
        res.status(200)
        .json({
            success:true,
            data:todo,
            message: ` Ye id: { ${id}} ki entry delete kardi hai jii`
        });

    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Nahi kar Paye Jii"
        });
    }
}