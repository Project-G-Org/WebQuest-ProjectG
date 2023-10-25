const fs = require("fs/promises");
const xpress = require('express');
const cors = require("cors");
const {v4: uuid} = require("uuid");
const _ = require("lodash");

const app = xpress();

app.use(xpress.json());
app.use(xpress.static(__dirname+"/Site/styles/"));

app.get('/', (req,res) =>{

    res.sendFile(__dirname + "/Site/index.html");
});

app.get('/questions', (req, res) =>{

    const quests = ["Beibe beibe do birulaibe?", "oldley candralaray do meu?"];

    res.json({
        question: _.sample(quests)
    });
});

app.post("/login", (req, res) => {

    const id = uuid();
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password){

        return res.sendStatus(400);
    }

    res.status(201).json({
        id: id
    });
});

app.listen(8080, ()=>{

    console.log('Server Startado Na Porta 8080');

});