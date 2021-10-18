import { createSlice } from "@reduxjs/toolkit"
import { Card } from "../models/card"


export const studySlice = createSlice({
	name: "myStudy",
	initialState: {
		cards: [],
		front: "",
		back: "",
		index: -1,
	},
	reducers: {
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
			if ( state.index == state.cards.length-1)
			{
				state.index =  0;
			} else {
				state.index =  state.index + 1;
			}
		},

	}
});

export const { IncreaseIndex,setCards, setBack,setFront } = studySlice.actions;
export default studySlice.reducer;
