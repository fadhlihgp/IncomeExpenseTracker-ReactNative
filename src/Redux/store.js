import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./Slices/authSlice";
import {inExpApi} from "./Services/inExpApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {accountApi} from "./Services/accountApi";
import {api} from "./api";
// import {authSlice} from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        [authSlice.reducerPath]: authSlice.reducer,
        [api.reducerPath]: api.reducer
        // [inExpApi.reducerPath]: inExpApi.reducer,
        // [accountApi.reducerPath]: accountApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(inExpApi.middleware, accountApi.middleware)
})