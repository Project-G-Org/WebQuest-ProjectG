import db from "./database.js";

async function createAcc(username, password){

  const { error } = await db
  .from('students')
  .insert({ nome: username, password: password })

  return !error
};

export default createAcc;