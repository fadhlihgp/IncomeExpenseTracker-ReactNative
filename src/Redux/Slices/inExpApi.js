import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url_api } from "../../Utils/constData";
import * as SecureStorage from "expo-secure-store";

export const inExpApi = createApi({
    reducerPath: 'inExpApi',
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
    tagTypes: ['dashboardData', 'transactionsData', 'token'],
    endpoints: (builder) => ({
        getDashboard: builder.query({
            query: () => '/income-expense/dashboard',
            providesTags: ['dashboardData', 'token']
        }),
        getAll: builder.query({
            query: () => '/income-expense',
            providesTags: ['transactionsData', 'token']
        }),
        addIncomeExpense: builder.mutation({
            query: (dataInput) => ({
                url: '/income-expense',
                method: 'POST',
                body: dataInput
            }),
            invalidatesTags: ['transactionsData', 'dashboardData', 'token']
        }),
        deleteIncomeExpense: builder.mutation({
            query: ({id}) => ({
                url: `/income-expense/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['transactionsData', 'dashboardData', 'token']
        })
    })
});

export const {
    useGetDashboardQuery, useGetAllQuery, useAddIncomeExpenseMutation,
    useDeleteIncomeExpenseMutation
} = inExpApi;
