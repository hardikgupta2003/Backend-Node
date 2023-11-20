// import the model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async (req,res)=>{
    try{
        // fetch  todo by id from db 
        const id=req.params.id;
        const {title,description,updatedAt} = req.body;
        const todo=await Todo.findByIdAndUpdate({_id: id },{title,description,UpdatedAt:Date.now()}
        
        );

        // response 
      
        res.status(200)
        .json({
            success:true,
            data:todo,
            message: ` Ye id: { ${id}} ki entry update kardi hai jii`
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