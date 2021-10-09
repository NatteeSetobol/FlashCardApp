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
	}),
});

export const { useGetSettingsQuery } = settingApi;
