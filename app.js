const express = require("express");

const db = require("./src/database");

const app = express();

app.get("/", (req,res) => {
    res.send ("Hi!");
});

db.hasConection ();

app.listen (3000, () => console.log ("Servidor rodando na porta 3000"));