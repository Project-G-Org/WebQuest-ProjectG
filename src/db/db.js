const initOptions = {
    
    connect(e){
        console.log("Banco de Dados Connectado com Sucesso");
    },
    
    disconnect(e){
        console.log("Banco de Dados Desconectado")
    }
}

import pg_promisses from 'pg-promise';
const pgp = pg_promisses (initOptions);

const databaseConnetion = pgp("postgresql://postgres:12341234@localhost:5432/users");

export default databaseConnetion;