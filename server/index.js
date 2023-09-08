const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


//CREATE

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1)", 
        [description]);

        res.json(newTodo);
    } catch (err) {
        console.error(err);
    }
})


app.listen(5001, () => {
    console.log("Server is starting on port 5000");
});

