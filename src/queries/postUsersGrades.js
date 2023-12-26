import { createClient } from '@supabase/supabase-js';
import { myApplicationKey, myApplicationURL } from '../secrets.js';

const db = createClient(
  myApplicationURL,
  myApplicationKey
);