import fs from 'fs/promises';
import xpress from 'express';
import cors from 'cors';
import { v4 as uuid} from "uuid";
import _ from 'lodash';
import path from 'path';
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import webQuest from './routes/WebQuest.js';
import session from 'express-session';
import flash from 'connect-flash';
import databaseConnetion from './db/db.js';
import userPages from './routes/User.js';
import { fileURLToPath } from 'url';

const app = xpress();

// SECTION: ========================= Directories ========================= 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, 'public'); // NOTE: Public Dir
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

app.use((req, res, next) => { // NOTE: Flahs Messages 
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));// NOTE: Handle Forms
app.use(bodyParser.json());// NOTE: ...

app.engine("handlebars", handlebars.engine({ defaultLayout: 'main' })); // NOTE: HandleBars as Template engine
app.set('view engine', 'handlebars'); // NOTE: ...
// !SECTION ===============================================================

// SECTION: ============================ Routes ===========================
app.use('/', webQuest);
app.use('/', userPages);
// !SECTION ===============================================================

app.listen(8080, () => {

    console.log('Server Startado Na Porta 8080');

});

// https://www.youtube.com/watch?v=tgYztVxL41Y
// https://www.youtube.com/watch?v=ldYcgPKEZC8

// TODO - Single responsibility principle
// TODO - Ecma Script
// TODO - API service