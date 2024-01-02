import express from 'express'
import ifNull from '../helpers/login.js';
import verifyLogIn from '../queries/usersLogin.js';
import createAcc from '../queries/usersSingUp.js';
import treatAnswers from '../helpers/questionAnswers.js'
import session from 'express-session';
import bcrypt from 'bcrypt';
import getHash from '../queries/getHash.js';

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

    const hashedPass = await getHash(username);

    if (hashedPass === false){
        errors.push({ text: "Conta não Encontrada" })
        res.render('login', { errors: errors })
        res.status(400)
        return
    }
    
    const passCheck = await bcrypt.compare(password, hashedPass)

    if (passCheck === false) {
        errors.push({ text: "Senha não está certa" })
        res.render('login', { errors: errors })
        res.status(400)
        return
    }

    req.flash("success_msg", "Login Efetivado com Sucesso");
    res.status(200);
    res.redirect('/home');
});

users.get('/signup', (req, res) => {
    // NOTE: Signup Page
    res.render('signUp');
});

users.post('/signup', async (req, res) => {
    // NOTE: Creating ACC
    const username = req.body.User;
    var password = req.body.Pass;

    const errors = ifNull(username, password);

    if (errors.length > 0) {
        res.render("signUp", { errors: errors });
        return
    }

    const dAcountExist = await verifyLogIn(username, password)

    if (dAcountExist === true){
        errors.push({ text: 'Conta Já Existente' })
        res.render('signUp', { errors: errors })
    } else {
        bcrypt.genSalt(10, (erro, salt) =>{
            bcrypt.hash(password, salt, async (erro, hash) =>{
                if(erro){
                    req.flash("error_msg", 'Houve Um Erro Durante o salvamento do Usuário');
                }
                else{
                    password = hash;
                    const acountCreated = await createAcc(username, password)

                    if(acountCreated === true){
                        
                        req.flash("success_msg", "Conta Criada com Sucesso");
                        res.status(201)
                        res.redirect('/');
                    }
                    else{
                        req.flash('error_msg', 'Não foi possível criar a conta');
                        res.render('signUp');
                    }
                }
            });
        });
    }

});

users.post('/userAnswers', async (req, res) =>{

    var userAnswers = req.body; 
    var result = treatAnswers(userAnswers);
    res.json(result);
});

users.get('/test', (req, res) => {
    
});

export default users;
