import { createClient } from '@supabase/supabase-js';
import { myApplicationKey, myApplicationURL } from '../secrets.js';

const db = createClient(
  myApplicationURL,
  myApplicationKey
);

const { data, error } = await db 
  .from('students')
  .select('nome, grade')
  .order('grade', {ascending: false}) 
;

export { 
  data,
  error as dbGradeError
}