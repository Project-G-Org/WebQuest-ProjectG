import db from "./database.js";

const { data, error } = await db 
  .from('students')
  .select('nome, grade')
  .not('grade', 'is', null)
  .order('grade', {ascending: false})
;

export { 
  data,
  error as dbGradeError
}