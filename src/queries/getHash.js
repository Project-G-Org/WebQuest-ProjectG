import db from "./database.js";

async function getHash(user){

  const { data, error } = await db 
  .from('students')
  .select('password')
  .eq('nome', user)
  .single()

  if (error){
    if (error.code === 'PGRST116'){
      return false
    } else {
      console.error(error)
    }
  } else {
    return data.password
  }
}

export default getHash;