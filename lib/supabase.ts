import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

export const supabase = createClient(
  'https://enmgmanmmrmbiajzawvz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVubWdtYW5tbXJtYmlhanphd3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NDQ5MTIsImV4cCI6MjAwNDQyMDkxMn0.Lu6DFzXkN6zv9loWbnAd2O854-gio7O-1gcfqnDO7dk',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);

export async function createUser(
  username: String,
  userEmail: String,
  userPassword: String,
) {
  let {data, error} = await supabase
    .from('User')
    .insert({name: username, email: userEmail, password: userPassword});
  if (error) {
    console.error(data);
  }
}
