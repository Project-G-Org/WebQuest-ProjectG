const fs = require("fs/promises");
const xpress = require('express');
const cors = require("cors");
const {v4: uuid} = require("uuid");
const _ = require("lodash");
const path = require("path");
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const WebQuestRouter = require('./routes/WebQuest');
const session = require('express-session');
const flash = require('connect-flash');
const db = require("./db/db");

const app = xpress();

// SECTION: ========================= Directories ========================= 
    const publicPath = path.join(__dirname,'public'); // NOTE: Public Dir
// !SECTION ===============================================================

// SECTION: =========================== Config ============================
    app.use(xpress.json()); // NOTE: To Handle Json
    app.use("/style", xpress.static(publicPath + "/style")); // NOTE: Css Styles
    app.use("/script", xpress.static(publicPath + "/script")); // NOTE: Js Scripts
    app.use("/img", xpress.static(publicPath + "/img")); // NOTE: imgs

    app.use(session({ //NOTE: Session configuration
        secret: "WebQuest",
        resave: true,
        saveUninitialized: true
    }));
    app.use(flash());// NOTE: Messages That Desapear

    app.use((req,res,next)=>{ // NOTE: Flahs Messages 
        res.locals.success_msg = req.flash("success_msg");
        res.locals.error_msg = req.flash("error_msg");
        next();
    });

    app.use(bodyParser.urlencoded({extended: false}));// NOTE: Handle Forms
    app.use(bodyParser.json());// NOTE: ...

    app.engine("handlebars", handlebars.engine({defaultLayout: 'main'})); // NOTE: HandleBars as Template engine
    app.set('view engine', 'handlebars'); // NOTE: ...
// !SECTION ===============================================================

// SECTION: ============================ Routes ===========================
    app.use('/WebQuest', WebQuestRouter);

    app.get('/', (req,res) =>{
        // NOTE: LogIn Page
        res.render('login');
    });

    app.post("/", (req, res) => {
        // NOTE: Request Name and Username
        let Username = req.body.User;
        let Password = req.body.Pass;
        var errors = [];

        if(!Username || Username === null){
            errors.push({text: "Usuário Não Foi Inserido"});
        }
        if(!Password || Password === null){
            errors.push({text: "Senha Não Foi Inserida"});
        }
        if(errors.length > 0){
            res.render("login", {errors: errors});
        }
        else{
            req.flash("success_msg", "Login Efetivado com Sucesso");
            res.redirect('/WebQuest/home');
        };

    });

    app.get('/signup', (req, res) =>{
        // NOTE: Signup Page
        res.render('signUp');
    });

    app.post('/signup', (req,res) =>{
        // NOTE: Creating ACC
        let Username = req.body.User;
        let Password = req.body.Pass;
        var errors = []

        if(!Username || Username === null){
            errors.push({text: "Usuário Não Foi Inserido"});
        }
        if(!Password || Password === null){
            errors.push({text: "Senha Não Foi Inserida"});
        }
        if(errors.length > 0){
            res.render("signUp", {errors: errors});
        }
        else{
            req.flash("success_msg", "Login Efetivado com Sucesso");
            res.redirect('/');
        };
    });
// !SECTION ===============================================================

app.listen(8080, ()=>{

    console.log('Server Startado Na Porta 8080');

});

// https://www.youtube.com/watch?v=tgYztVxL41Y