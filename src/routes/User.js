import express from 'express'
import ifNull from '../firstInfoValidation/login.js';
import verifyLogIn from '../queries/usersLogin.js';

const users = express.Router()

users.get('/', (req, res) => {
    // NOTE: LogIn Page
    res.render('login');
});

users.post("/", async (req, res) => {
    // NOTE: Request Name and Username
    const username = req.body.User;
    const password = req.body.Pass;
    let errors = null;

    errors = ifNull(username, password);

    if (errors.length > 0) {
        res.render('login', { errors: errors })
        return
    }

    const dCountExist = await verifyLogIn(username, password)

    if (dCountExist === false){
        console.log('Não tem')
        errors.push({ text: "Conta não Encontrada" })
        res.render('login', { errors: errors })
    }
    else if (dCountExist === true){
        req.flash("success_msg", "Login Efetivado com Sucesso");
        res.status(200);
        res.redirect('/home');
    }
    else{
        res.status(400);
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

export default users;
