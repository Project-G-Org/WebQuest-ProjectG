const express = require("express");
const app = express();
const serveIndex = require('serve-index');

app.get("/",(req,res) => {
    
    res.sendFile(__dirname + "/index.html");
});

app.get("/quest", (req,res) => {

    res.sendFile(__dirname + "/pages/quests.html");
});

app.use('/styles', express.static('styles'));
app.use('/styles', serveIndex('styles'));
app.use('/script', express.static('script'));
app.use('/script', serveIndex('script'));

app.listen(8080, function(){

    console.log("Servidor Rodando, Porta 8080");
});