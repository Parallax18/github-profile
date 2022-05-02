import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/users' }),
    tagTypes: ['Post'],
    endpoints: builder => ({
      getRepositories: builder.query({
        query: (username : string) => `/${username}/repos`
      }),

    })
  })
  
  export const {
    useGetRepositoriesQuery,
  } = apiSlice