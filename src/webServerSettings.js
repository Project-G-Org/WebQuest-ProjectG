import xpress from 'express';
import path from 'path';
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import webQuest from './routes/WebQuest.js';
import session from 'express-session';
import flash from 'connect-flash';
import userPages from './routes/User.js';
import { fileURLToPath } from 'url';

var app = xpress();

  // SECTION: ========================= Directories ========================= 
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const publicPath = path.join(__dirname, 'public'); // NOTE: Public Dir
  const oneDay = 1000 * 60 * 60 * 24; 
  // !SECTION ===============================================================

function serverConfig(){
  // SECTION: =========================== Config ============================
  console.log("[WebServer] Ajustando Configurações do Back End");
  app.use(xpress.json()); // NOTE: To Handle Json
  app.use("/style", xpress.static(publicPath + "/style")); // NOTE: Css Styles
  app.use("/script", xpress.static(publicPath + "/script")); // NOTE: Js Scripts
  app.use("/img", xpress.static(publicPath + "/img")); // NOTE: imgs

  app.use(session({ //NOTE: Session configuration
      secret: "WebQuest",
      cookie: { maxAge: oneDay },
      resave: false,
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
  console.log("[WebServer] Configurações Prontas");
  return;
  // !SECTION ===============================================================
};

  // SECTION: ============================ Routes ===========================
  function setRoutes() {
      app.use('/', webQuest);
      app.use('/', userPages);  
      console.log ('[WebServer] Rotas Prontas');
    return;
  };
  // !SECTION ===============================================================

  export default{
    app, 
    serverConfig,
    setRoutes
  }; 