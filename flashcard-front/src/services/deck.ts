import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const deckApi = createApi({
	reducerPath: `Deck`,
	baseQuery: fetchBaseQuery( {
	}),
	endpoints: (builder) => ({
		createDeck: builder.mutation ({
			query: (input) => ({
				url: `deck`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
                },
				body: input,
			}),
		}),
		getAllDecks: builder.query({
			query:() => '/decks'
		}),
	}),
});

export const { useCreateDeckMutation, useGetAllDecksQuery } = deckApi;
