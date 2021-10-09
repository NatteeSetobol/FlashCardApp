import { createSlice } from "@reduxjs/toolkit"
import { Card } from "../models/card"

export const deckSlice = createSlice({
	name: "myDeck",
	initialState: {
		decks: [],
		selected: {},
		selectedCards: [],
		selectedCardIndex: 0,
		delay1: -1,
		delay2: -1,
		delay3: -1,
		delay4: -1,
		delay5: -1,
	},
	reducers: {
		setDelay1:(state, action) => {
			state.delay1 = action.payload;
		},

		setDelay2:(state, action) => {
			state.delay2 = action.payload;
		},
		setDelay3:(state, action) => {
			state.delay3 = action.payload;
		},
		setDelay4:(state, action) => {
			state.delay4 = action.payload;
		},
		setDelay5:(state, action) => {
			state.delay5 = action.payload;
		},
		setDeck:(state,action) =>  {
			state.decks = action.payload;
		},
		addDeck:(state, action) => {
			state.decks.concat(action.payload);
		},
		getDeck:(state) =>
		{
			return state;
		},
		setSelectedDeck: (state, action) => {
			state.selected = action.payload;
		},
		setSelectedCards: (state, action) => {
			state.selectedCards = action.payload;
		},
		setSelectedCardIndex: (state, action) => {
			state.selectedCardIndex = action.payload;
		},
		updateCard: (state, action) => {
		}
	}
});

export const { setDelay1, setDelay2,setDelay3,setDelay4,setDelay5, updateCard, setDeck,getDeck, addDeck,setSelectedDeck, setSelectedCards,setSelectedCardIndex } = deckSlice.actions;
export default  deckSlice.reducer;
