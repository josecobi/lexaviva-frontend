import { apiSlice } from "./apiSlice";
// Define the base URL for the users API
const USERS_URL = "http://127.0.0.1:5050/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data
            }),
        }),

    }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation } = usersApiSlice;