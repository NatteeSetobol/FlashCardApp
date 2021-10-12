import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Setting } from "../models/setting"

export const settingApi = createApi({
	reducerPath: `setting`,
	baseQuery: fetchBaseQuery({
	}),
	endpoints: (builder) => ({
		getSettings: builder.query({
			query: (deckId) => '/decksettings/' + deckId
		}),
		saveSettings: builder.mutation({
			query: (input) => ({
				url:`/decksettings`,
				method: `PUT`,
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: input,
			}),
		}),
	}),
});

export const { useSaveSettingsMutation,useGetSettingsQuery } = settingApi;
