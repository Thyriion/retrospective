import {createSlice} from "@reduxjs/toolkit";

export interface ErrorState {
    showError: boolean;
    errorMessage: string;
}

const initialState: ErrorState = {
    showError: false,
    errorMessage: ''
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        showError: (state, action) => {
            state.showError = action.payload.showError;
            state.errorMessage = action.payload.errorMessage;
        }
    }
});

export const {showError} = errorSlice.actions;