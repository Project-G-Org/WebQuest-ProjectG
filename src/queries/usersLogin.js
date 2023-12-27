import db from "./database.js";

async function verifyLogIn(user, password){

  const { count, error } = await db 
  .from('students')
  .select('*', {count: 'exact', head: true})
  .eq('nome', user, 'password', password)

  if (error){
    console.error(error)
    return false
  }

  return count >= 1
}

export default verifyLogIn;