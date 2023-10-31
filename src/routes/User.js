import express from 'express'

const users = express.Router()

function validation(username, password){
    const errors = []

    if (!username || username === null) { // TODO transform into validation function
        errors.push({ text: "Usuário Não Foi Inserido" });
    }

    if (!password || password === null) {
        errors.push({ text: "Senha Não Foi Inserida" });
    }

    return(errors);
};

users.get('/', (req, res) => {
    // NOTE: LogIn Page
    res.render('login');
});

users.post("/", (req, res) => {
    // NOTE: Request Name and Username
    const username = req.body.User;
    const password = req.body.Pass;
    
    const errors = validation(username, password);

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

    const errors = validation(username, password);

    if (errors.length > 0) {
        res.render("signUp", { errors: errors });

        return
    }

    req.flash("success_msg", "Login Efetivado com Sucesso");
    res.redirect('/');
});

export default users;
