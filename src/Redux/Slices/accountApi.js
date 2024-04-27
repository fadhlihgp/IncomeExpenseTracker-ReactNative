import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {base_url_api} from "../../Utils/constData";

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({
        baseUrl: base_url_api,
        prepareHeaders: async (headers, { getState }) => {
            // Ambil token secara asynchronous
            const { auth } = getState();
            const token = auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
        }
    }),
    tagTypes: ['accountData', 'token'],
    endpoints: (builder) => ({
        getAccount: builder.query({
            query: () => '/account/current-account',
            providesTags:['accountData', 'token']
        })
    })
})

export const {useGetAccountQuery} = accountApi