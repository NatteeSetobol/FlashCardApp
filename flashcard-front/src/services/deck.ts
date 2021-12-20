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
		getAllOfUsersDeck: builder.mutation({
			query: (input) => ({
				url: `/decks`,
				methos: `GET`
			})
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

export const { useGetAllOfUsersDeckMutation, useDeleteDeckMutation,useCreateDeckMutation, useGetAllDecksQuery } = deckApi;
