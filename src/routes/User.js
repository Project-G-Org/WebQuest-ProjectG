import express from 'express'
import ifNull from '../InfoValidation/login.js';
import verifyLogIn from '../queries/usersLogin.js';
import createAcc from '../queries/usersSingUp.js';
import treatAnswers from '../InfoValidation/questionAnswers.js'

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

    const dAcountExist = await verifyLogIn(username, password)

    if (dAcountExist === false){
        errors.push({ text: "Conta não Encontrada" })
        res.render('login', { errors: errors })
    }
    else if (dAcountExist === true){
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

users.post('/signup', async (req, res) => {
    // NOTE: Creating ACC
    const username = req.body.User;
    const password = req.body.Pass;

    const errors = ifNull(username, password);

    if (errors.length > 0) {
        res.render("signUp", { errors: errors });
        return
    }

    const acountCreated = await createAcc(username, password)

    console.log(acountCreated)

    if(acountCreated === true){
        
        req.flash("success_msg", "Conta Criada com Sucesso");
        res.status(201)
        res.redirect('/');
    }
    else{
        errors.push({ text: "Não foi Possível Criar a Conta" })
        res.render('singUp', { errors: errors })
    }

});

users.post('/userAnswers', async (req, res) =>{

    var userAnswers = req.body; 
    var result = treatAnswers(userAnswers);
    res.json(result);
});

export default users;
