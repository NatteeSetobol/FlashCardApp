import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Card } from "../models/card"

export const cardApi = createApi({
	reducerPath: `Cardos`,
	baseQuery: fetchBaseQuery( {
	}),
	endpoints: (builder) => ({
		createCard: builder.mutation ({
			query: (input) => ({
				url: `/card`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
                },
				body: input,
			}),
		}),
		editCard: builder.mutation({
			query: (card:Card) => ({
				url: `/card`,
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: card,
			}),
		}),
		submitCard: builder.mutation({
			query: (cardEdit) => ({
				url: `/card`,
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: cardEdit,
			}),
		}),
		deleteCard: builder.mutation({
			query: (card) => ({
				url: `/card`,
				method: `DELETE`,
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: card,
			}),
		}),
		reloadCards: builder.mutation({
			query: (deckId) => ({
				url: `/cards/` + deckId 
			}),
		}),
		getAllCards: builder.query({
			query: (deckId) => '/cards/' + deckId
		}),
		getAllDueCards: builder.query({
			query: (deckId) => '/cards/' + deckId + "/due"
		}),
	}),
});

export const { useSubmitCardMutation,useReloadCardsMutation, useGetAllDueCardsQuery, useCreateCardMutation, useGetAllCardsQuery,useEditCardMutation, useDeleteCardMutation } = cardApi;
