import express from 'express'
import ifNull from '../firstInfoValidation/login.js';
import {data, dbGradeError} from '../queries/usersGrades.js';

const users = express.Router()

users.get('/', (req, res) => {
    // NOTE: LogIn Page
    res.render('login');
});

users.post("/", (req, res) => {
    // NOTE: Request Name and Username
    const username = req.body.User;
    const password = req.body.Pass;
    const errors = null;

    errors = ifNull(username, password);

    if (errors.length > 0) {
        res.render("signUp", { errors: errors });
        return
    }
    else if (username === DB.User && password === DB.Pass){
        req.flash("success_msg", "Login Efetivado com Sucesso");
        res.status(200);
        res.redirect('/home');
    }
    else{
        res.status(400).end();
    }    
});

users.get('/signup', (req, res) => {
    // NOTE: Signup Page
    res.render('signUp');
});

users.post('/signup', (req, res) => {
    // NOTE: Creating ACC
    const username = req.body.User;
    const password = req.body.Pass;

    const errors = ifNull(username, password);

    if (errors.length > 0) {
        res.render("signUp", { errors: errors });

        return
    }

    req.flash("success_msg", "Conta Criada com Sucesso");
    res.redirect('/');
});

users.get('/test', (req, res) =>{

	res.render('webQuest/notas', {data});
});

export default users;
