import { createClient } from "@supabase/supabase-js";
import { myApplicationKey, myApplicationURL } from "../secrets.js";

const db = createClient (
  myApplicationURL,
  myApplicationKey
);

async function createAcc(username, password){

  const { error } = await db
  .from('students')
  .insert({ nome: username, password: password })

  if (error){
    console.log(error)
    return(false)
  }
  else {
    return(true)
  }
};

export default createAcc;