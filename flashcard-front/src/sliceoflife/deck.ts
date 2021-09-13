import { createSlice } from "@reduxjs/toolkit"

export const deckSlice = createSlice({
	name: "myDeck",
	initialState: {
		decks: [],
		selected: {},
		selectedCards: [],
		selectedCardIndex: 0,
	},
	reducers: {
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
		}
	}
});

export const { setDeck,getDeck, addDeck,setSelectedDeck, setSelectedCards,setSelectedCardIndex } = deckSlice.actions;
export default  deckSlice.reducer;
