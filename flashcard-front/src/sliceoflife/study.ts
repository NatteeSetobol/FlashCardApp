import { createSlice } from "@reduxjs/toolkit"
import { Card } from "../models/card"


export const studySlice = createSlice({
	name: "myStudy",
	initialState: {
		cards: [] ,
		front: "",
		back: "",
		index: -1,
		lastIndex: 0,
	},
	reducers: {
		setEaseFactor: (state, action) => {
			let card:Card =  state.cards[state.lastIndex];
			card.easeFactor = action.payload;
		},
		setCardInterval: (state, action) => {
			let card:Card =  state.cards[state.lastIndex];
			card.interval = action.payload;
		},

		setRep: (state, action) => {
			let card:Card =  state.cards[state.lastIndex];
			card.repetitions = action.payload;
		},
		setQuality: (state, action) => {
			let card:Card =  state.cards[state.lastIndex];
			card.quality = action.payload;
		}, 
		setCards:(state, action) => {
			state.cards = action.payload;
		},
		setFront:(state, action) => {
			state.front = action.payload;
		},
		setBack:(state, action) => {
			state.back = action.payload;
		},
		IncreaseIndex:(state, action) => {
			//if ( state.index == state.cards.length-1)
		//	{
		//		state.lastIndex = state.index;
		//		state.index =  0;
		//	} else {
				state.lastIndex = state.index;
				state.index =  state.index + 1;
		//	}
		},

	}
});

export const { setEaseFactor,setCardInterval, setRep, setQuality,IncreaseIndex,setCards, setBack,setFront } = studySlice.actions;
export default studySlice.reducer;
