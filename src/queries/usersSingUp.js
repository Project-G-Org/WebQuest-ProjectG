import db from "./database.js";

async function createAcc(username, password){

  try{
    const { error } = await db
    .from('students')
    .insert({ nome: username, password: password })

    if(error) throw error.message
    return !error
    
  } catch (err){
    console.log(err)
  }
};

export default createAcc;