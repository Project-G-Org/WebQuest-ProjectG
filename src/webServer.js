import webSettings from './webServerSettings.js';

function createWebServer (){

  async function start(port){
    console.log("[WebServer] Criando Servidor");
    try{
      await webSettings.serverConfig();
    }catch(err){
      console.log(`[WebServer] ${0}`, err);
      process.exit(1)
    };

    try{
      await webSettings.setRoutes();
    }catch(err){
      console.log(`[WebServer] ${0}`, err);
      process.exit(1)
    };
    
    try{
      await webSettings.app.listen(port, () =>{
        console.log ('[WebServer] Servidor Criado');
      });
    }catch(err){
      console.log(`[WebServer] ${0}`, err);
      process.exit(1)
    };
    return;
  };

  return{
    start
  }
};

export default createWebServer;