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
		deleteDeck: builder.mutation ({
			query: (input) => ({
				url: `deck`,
				method: `DELETE`,
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
                },
				body: input,
			}),
		}),
	}),
});

export const { useDeleteDeckMutation,useCreateDeckMutation, useGetAllDecksQuery } = deckApi;
