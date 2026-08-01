const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: 'admin-mentari/.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Env variables not found!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data: tables, error: tErr } = await supabase.from('venues').select('*');
  if (tErr) {
    console.error('Error querying venues:', tErr);
  } else {
    console.log('Venues rows count:', tables.length);
    console.log('Sample row:', tables[0]);
  }
}

run();
