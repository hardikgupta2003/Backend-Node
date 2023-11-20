const express=require("express");
const router = express.Router();

// import controller
const {createTodo}=require("../controller/CreateTodo");
const {getTodo}=require("../controller/getTodo");
const {getTodoByID}=require("../controller/getTodoByID");
const {updateTodo}=require("../controller/updateTodo");

// define api routes
router.post("/createTodo",createTodo);
// getTodos route ko map krdiya "getTodo controller se"
router.get("/getTodos",getTodo);
router.get("/getTodoByID/:id",getTodoByID);

module.exports=router;