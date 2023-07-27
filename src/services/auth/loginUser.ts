import argon2 from 'react-native-argon2';
import {supabase} from '../supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ARGONSALT} from '@env';

export async function loginUser(
  userEmail: String,
  userPassword: String,
): Promise<string | null> {
  const password = await argon2(userPassword, ARGONSALT, {
    iterations: 5,
    memory: 16 * 1024,
    parallelism: 2,
    hashLength: 20,
    mode: 'argon2i',
  });
  let {data, error} = await supabase
    .from('User')
    .select()
    .eq('email', userEmail)
    .eq('password', password.encodedHash);
  if (error) {
    console.error(error);
    return null;
  }

  let jsonData = '';
  if (data?.length) {
    jsonData = JSON.stringify(data);
  }
  if (jsonData) {
    try {
      await AsyncStorage.setItem('user', jsonData);
    } catch (error) {
      console.error(error);
    }
  }

  return jsonData;
}
