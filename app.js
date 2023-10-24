const express = require("express");
const app = express();

app.get("/",(req,res) => {
    
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/quest", (req,res) => {

    res.sendFile(__dirname + "/src/pages/quests.html");
});

app.listen(8080, function(){

    console.log("Servidor Rodando, Porta 8080");
});