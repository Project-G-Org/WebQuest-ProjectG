import express from 'express'
import ifNull from '../firstInfoValidation/login.js';
import dbUsers from '../queries/users.js';

const users = express.Router()

users.get('/', (req, res) => {
    // NOTE: LogIn Page
    res.render('login');
});

users.post("/", (req, res) => {
    // NOTE: Request Name and Username
    const username = req.body.User;
    const password = req.body.Pass;
    
    const errors = ifNull(username, password);

    if (errors.length > 0) {
        res.render("signUp", { errors: errors });
        return
    }

    req.flash("success_msg", "Login Efetivado com Sucesso");
    res.redirect('/home');
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

export default users;
