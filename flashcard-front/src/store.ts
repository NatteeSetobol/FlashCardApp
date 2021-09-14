import { configureStore } from "@reduxjs/toolkit"
import { AnyAction, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk, { ThunkDispatch } from "redux-thunk";
import { loginApi } from "./services/login"
import { deckApi } from "./services/deck"
import { cardApi } from "./services/card"
import  deckReducer  from "./sliceoflife/deck"
import thunk from 'redux-thunk'

export const store = configureStore({
	reducer: {
		myDecks:deckReducer,
		[loginApi.reducerPath]: loginApi.reducer,
		[deckApi.reducerPath]: deckApi.reducer,
		[cardApi.reducerPath]: cardApi.reducer,
	},
	middleware: (getDefaultMiddiware) =>
		getDefaultMiddiware().concat(loginApi.middleware,deckApi.middleware, cardApi.middleware, thunk),
		
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, void, AnyAction>

export default store;

