const initOptions = {
    
    connect(e){
        console.log("Banco de Dados Connectado com Sucesso");
    },
    
    disconnect(e){
        console.log("Banco de Dados Desconectado")
    }
}

const pgp = require('pg-promise')(initOptions);

const db = pgp("postgresql://postgres:1211@localhost:5432/users");

module.exports = db;