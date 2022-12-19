import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://slimmom-oz0k.onrender.com', //! <-- FIX IT
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: user => ({
        url: `/api/users/signup`, //! <-- FIX IT
        method: 'POST',
        body: user,
      }),
    }),

    logInUser: builder.mutation({
      query: user => ({
        url: `/api/users/login`, //! <-- FIX IT
        method: 'POST',
        body: user,
      }),
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: `/users/logout`, //! <-- FIX IT
        method: 'POST',
      }),
      headers: {
        authorization: '',
      },
    }),

    getUser: builder.query({
      query: a => `/users/current${a}`, //! <-- FIX IT
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetUserQuery,
} = authApi;
