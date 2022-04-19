const express = require("express");
const app = express()

const port = 5000

app.get("/", (req, res) => {
    res.send("Hello World tes iya bisa")
})


app.listen(port, () => console.log(`server running on port: ${port}`))