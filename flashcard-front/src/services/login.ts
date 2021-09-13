import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const loginApi = createApi({
	reducerPath: `login`,
	baseQuery: fetchBaseQuery( {
	}),
	tagTypes: ['Post', 'User'],
	endpoints: (builder) => ({
		login: builder.mutation ({
			query: (input) => ({
				url: `user`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
                },
				body: input,
			}),
			invalidatesTags: ['Post'],
		}),
	}),
});

export const { useLoginMutation } = loginApi;
