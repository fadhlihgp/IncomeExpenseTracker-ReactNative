import {api} from "../api";

export const inExpApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDashboard: builder.query({
            query: () => '/income-expense/dashboard',
            providesTags: ['dashboardData']
        }),
        getAll: builder.query({
            query: () => '/income-expense',
            providesTags: ['transactionsData']
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
