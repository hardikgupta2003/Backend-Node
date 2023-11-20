// import the model
const Todo = require("../models/Todo");

//define route handler

exports.getTodoByID = async (req,res)=>{
    try{
        // fetch  todo by id from db 
        const id=req.params.id;
        const todo=await Todo.findById({_id: id });

        // response 
        if(!todo){
            return res.status(404).json({
                success:false,
                message:`No data found with given Id { ${id}}`,
            })
        }
        res.status(200)
        .json({
            success:true,
            data:todo,
            message: ` Ye id: { ${id}} ki entry aagayi jii`
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