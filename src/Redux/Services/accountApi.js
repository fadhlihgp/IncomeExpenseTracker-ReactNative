import {api} from "../api";

export const accountApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAccount: builder.query({
            query: () => '/account/current-account',
            providesTags:['accountData']
        }),
        updateAccount: builder.mutation({
            query: (data) => ({
                url: '/account/update-account',
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['accountData']
        })
    })
})

export const {useGetAccountQuery, useUpdateAccountMutation} = accountApi
