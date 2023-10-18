const mongoose=require("mongoose");
require("dotenv").config(); 
const dbConnect=()=>{
     mongoose.connect(process.env.DATABASE_URL,{
        useNewUserParser:true,
        useUnifiedTopology:true,
     })
     .then(()=> console.log("DB connection Succesfull"))
     .catch((error)=>{
        console.log("issue in DB connection");
        console.log(error.message)
        process.exit(1)
     });
}

module.exports=dbConnect;