import { createClient } from "@supabase/supabase-js";
import { myApplicationKey, myApplicationURL } from "../secrets.js";

const db = createClient(
  myApplicationURL,
  myApplicationKey
);

async function verifyLogIn(user, password){

  const { count, error } = await db 
  .from('students')
  .select('*', {count: 'exact', head: true})
  .eq('nome', user, 'password', password)

  if(count === 0){
    return (false);
  }
  else{
    return(true);
  };

};

export default verifyLogIn;