import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Card } from "../models/card"

export const cardApi = createApi({
	reducerPath: `card`,
	baseQuery: fetchBaseQuery( {
	}),
	tagTypes: ['Post', 'Card'],
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
			invalidatesTags: ['Post'],
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
		deleteCard: builder.mutation({
			query: (card:Card) => ({
				url: `/card`,
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: card,
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

export const {useGetAllDueCardsQuery, useCreateCardMutation, useGetAllCardsQuery,useEditCardMutation, useDeleteCardMutation } = cardApi;
