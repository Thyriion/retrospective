import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

export interface UserState {
  value: boolean;
}

const initialState: UserState = {
  value: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      state.value = true;
    },
    logout: state => {
      state.value = false;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
