const express = require("express");

const router = express.Router();

// Controller
const {
    getTodos,
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo,
} = require("../controllers/todo");
// Get getUsers and getUser from user controller here ...
const { addUsers, getUsers, getUser, updateUser, deleteUser } = require("../controllers/user");

// Route
router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.post("/todo", addTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

router.post("/user", addUsers);
// Create Route for fetching user data here ...
router.get("/users", getUsers);
router.get("/user/:id", getUser);
// Create Route for update user here ...
router.patch("/user/:id", updateUser);
// Create Route for delete user here ...
router.delete("/user/:id", deleteUser);

module.exports = router;