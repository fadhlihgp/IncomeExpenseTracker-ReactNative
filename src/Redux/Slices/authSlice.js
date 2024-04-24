import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const initialState = {
    isAuthenticated: false,
    token: null,
    error: null,
    isLoading: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
            state.error = null;
            state.token = null;
            state.isAuthenticated = false;
        },
        loginSuccess: (state, action) => {
            const { token } = action.payload;
            state.isLoading = false;
            state.error = null;
            state.token = token;
            state.isAuthenticated = true;
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
            state.isAuthenticated = false;
        },
        logoutAuth: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
        registerSuccess: (state) => {
            state.isLoading = false;
        }
    }
})

export const { loginSuccess, loginFailure, logoutAuth, loginRequest, registerSuccess } = authSlice.actions;
