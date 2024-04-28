import {api} from "../api";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (dataInput) => ({
                url: '/auth/login',
                method: 'POST',
                body: dataInput
            }),
            invalidatesTags: ['transactionsData', 'dashboardData', 'accountData']
        }),
        register: builder.mutation({
            query(dataInput) {
                return {
                    url: '/auth/register',
                    method: 'POST',
                    body: dataInput
                }
            }
        })
    })
})

export const {useLoginMutation, useRegisterMutation} = authApi