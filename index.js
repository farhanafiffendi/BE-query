const express = require("express");
const app = express()

const port = 5000

app.use(express.json())

let todos = [
    {
        id: 1,
        title: "Cuci tangan",
        isDone: true
    },
    {
        id: 2,
        title: "Jaga jarak",
        isDone: false
    },
]

app.get("/todos", (req, res) => {
    res.send({
        data: todos
    })
})

app.get("/todo/:id", (req, res) => {
    const id = req.params.id

    const index = id - 1
    res.send(todos[index])
})

//POST route: receive json body request, from user input, then push to todos array
// Create method POST here
app.post("/todo", (req, res) => {
    todos = [...todos, req.body]


    res.send({
        data: todos
    })

})

//PATCH route: receive json body request, from user input, then push to todos array
//by object id
// Create method PATCH here
app.patch("/todo/:id", (req, res) => {
    const { id } = req.params

    const index = id - 1
    todos[index] = { ...todos[index], ...req.body }

    res.send({
        data: todos[index]
    })
})

//DELETE route: delete the todo obj, by received id request params
// Create method DELETE here
app.delete("/todo/:id", (req, res) => {
    const { id } = req.params
    todos = todos.filter((item) => item.id != id)

    res.send({
        data: todos
    })
})


app.listen(port, () => console.log(`server running on port: ${port}`))