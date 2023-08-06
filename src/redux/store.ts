import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from './reducers/userSlice';
import {errorSlice} from "./reducers/errorSlice";

export const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        error: errorSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
