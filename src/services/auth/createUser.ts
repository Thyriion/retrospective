import argon2 from 'react-native-argon2';
import {supabase} from '../supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ARGONSALT} from '@env';

export async function createUser(
  username: String,
  userEmail: String,
  userPassword: String,
) {
  const salt = ARGONSALT;
  const password = await argon2(userPassword, salt, {
    iterations: 5,
    memory: 16 * 1024,
    parallelism: 2,
    hashLength: 20,
    mode: 'argon2i',
  });

  let {data, error} = await supabase
    .from('User')
    .insert({name: username, email: userEmail, password: password.encodedHash});

  let jsonData = '';

  if (error) {
    console.log(error);
  } else {
    console.log('else');
    jsonData = JSON.stringify(data);
    await AsyncStorage.setItem('user', jsonData);
  }

  return jsonData;
}
