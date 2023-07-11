import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const supabase = createClient(
  'https://enmgmanmmrmbiajzawvz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVubWdtYW5tbXJtYmlhanphd3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NDQ5MTIsImV4cCI6MjAwNDQyMDkxMn0.Lu6DFzXkN6zv9loWbnAd2O854-gio7O-1gcfqnDO7dk',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: false,
      detectSessionInUrl: false,
    },
  },
);
import argon2 from 'argon2';

export async function createUser(
  username: String,
  userEmail: String,
  userPassword: String,
) {
  // const hash = await argon2.hash(userPassword);
  let {data, error} = await supabase
    .from('User')
    .insert({name: username, email: userEmail, password: userPassword});
  const jsonData = JSON.stringify(data);
  await AsyncStorage.setItem('user', jsonData);
  if (error) {
    console.error(data);
  }
}

export async function logIn(userEmail: String, userPassword: String) {
  // const hash = await argon2.hash(userPassword);
  let {data, error} = await supabase
    .from('User')
    .select()
    .eq('email', userEmail)
    .eq('password', userPassword);

  if (error) {
    console.error(error);
    return null;
  }

  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem('user', jsonData);
  } catch (error) {
    console.error(error);
  }

  return data;
}

export async function logOut(): Promise<boolean> {
  try {
    await AsyncStorage.removeItem('user');
  } catch (error) {
    console.error(error);
    return false;
  }
  return true;
}
