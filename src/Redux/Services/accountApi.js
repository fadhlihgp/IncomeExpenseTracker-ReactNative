import {api} from "../api";

export const accountApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAccount: builder.query({
            query: () => '/account/current-account',
            providesTags:['accountData', 'token']
        })
    })
})

export const {useGetAccountQuery} = accountApi