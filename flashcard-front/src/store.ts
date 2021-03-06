import { configureStore } from "@reduxjs/toolkit"
import { AnyAction, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk, { ThunkDispatch } from "redux-thunk";
import { loginApi } from "./services/login"
import { deckApi } from "./services/deck"
import { cardApi } from "./services/card"
import { settingApi } from "./services/setting"
import  deckReducer  from "./sliceoflife/deck"
import  studyReducer  from "./sliceoflife/study"
import thunk from 'redux-thunk'

export const store = configureStore({
	reducer: {
		myDecks:deckReducer,
		myStudy:studyReducer,
		[loginApi.reducerPath]: loginApi.reducer,
		[deckApi.reducerPath]: deckApi.reducer,
		[cardApi.reducerPath]: cardApi.reducer,
		[settingApi.reducerPath]: settingApi.reducer,
	},
	middleware: (getDefaultMiddiware) =>
		getDefaultMiddiware().concat(loginApi.middleware,deckApi.middleware, cardApi.middleware,settingApi.middleware, thunk),
		
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, void, AnyAction>

export default store;

