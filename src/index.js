const fs = require("fs/promises");
const xpress = require('express');
const cors = require("cors");
const {v4: uuid} = require("uuid");
const _ = require("lodash");
const path = require("path");
const handlebars = require("express-handlebars");

const app = xpress();

// SECTION: ========================= Directories ========================= 
    const publicPath = path.join(__dirname,'public'); // NOTE: Public Dir
// !SECTION ===============================================================

// SECTION: =========================== Config ============================
    app.use(xpress.json()); // NOTE: To Handle Json
    app.use("/style", xpress.static(publicPath + "/style")); // NOTE: Css Styles
    app.use("/script", xpress.static(publicPath + "/script")); // NOTE: Js Scripts
    app.use("/img", xpress.static(publicPath + "/img")); // NOTE: imgs

    app.engine("handlebars", handlebars.engine({defaultLayout: 'main'})); // NOTE: HandleBars as Template engine
    app.set('view engine', 'handlebars'); // NOTE: ...
// !SECTION ===============================================================

// SECTION: ============================ Routes ===========================
    app.get('/', (req,res) =>{
        // NOTE: LogIn Page
        res.render('login');
    });

    app.post("/", (req, res) => {
        // NOTE: Request Name and Username
        const id = uuid();
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password){
            return res.sendStatus(400);
        }

        res.status(201).json({
            id: id,
            username: username,
            password: password 
        });
    });

    app.get('/home', (req, res) =>{
        // NOTE: Home Page
        res.render('home');
    });

    app.get('/material', (req, res) =>{
        // NOTE: Material Page
        res.render('material');
    });
    app.get('/signup', (req, res) =>{
        // NOTE: Signup Page
        res.render('signUp');
    });

    app.get('/questions', (req, res) =>{
        // NOTE: Questions Form Page
        res.render('quests');
    });
// !SECTION ===============================================================

app.listen(8080, ()=>{

    console.log('Server Startado Na Porta 8080');

});