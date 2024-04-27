import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./Slices/authSlice";
import {inExpApi} from "./Slices/inExpApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {accountApi} from "./Slices/accountApi";
// import {authSlice} from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [inExpApi.reducerPath]: inExpApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(inExpApi.middleware, accountApi.middleware)
})