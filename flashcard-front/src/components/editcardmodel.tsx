
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useEditCardMutation } from "../services/card"
import { useDispatch, useSelector } from "react-redux"
import { setDeck,updateCard,setSelectedCards } from "../sliceoflife/deck"
import { Card } from "../models/card"

const EditCardModal = () => {
	const [editShow, setEditShow] = useState(false);
	const editHandleClose = () => setEditShow(false);
	const editHandleShow = () => setEditShow(true);
	const [inputs, setInputs] = useState({cardBack: '', cardFront: ''});
	const [clicked, setClicked] = useState(false);
	const [resultStatus, setResultStatus] = useState("");
	const [  EditCard, { data, error,isLoading, isSuccess, isError }  ] = useEditCardMutation()
	const  myDeck  = useSelector( (state:any) => state.myDecks)
	const dispatch = useDispatch();
	const [scard, setCard] = useState({});
	
    useEffect(() => {
		if (myDeck.selectedCardIndex != -1)
		{
			const c:Card = myDeck.selectedCards[myDeck.selectedCardIndex];
			setInputs({cardBack: c.back, cardFront: c.front});
		}
		//setInputs({cardBack:c.front, cardFront: c.back});
    }, [null]);


	const HandleSubmit = (event: any) => {
		event.preventDefault();

		const editCard:Card = myDeck.selectedCards[myDeck.selectedCardIndex];
		const newCard:Card = { id: editCard.id,deckId: 0, front: inputs.cardFront, back:inputs.cardBack, dueDate: '', quality: 0, interval: 0, easeFactor: 0.0, repetitions: 0 };

		EditCard(newCard);
		setClicked(true);
	}

	if (clicked)
	{
		if (isSuccess)
		{
			if (data)
			{
				if (data.error)
				{
					setResultStatus(data.error);
				} else {
					dispatch(setSelectedCards(data));
					setResultStatus("Edit successfull!");
					editHandleClose();
				}
				setClicked(false);
			}
		}
	}
	const HandleInputChange = (event: any) => {
		event.persist();
		setInputs((inputs: any) => ({ ...inputs, [event.target.name]: event.target.value }))
	}

	return (
		<div>
			<form onSubmit={HandleSubmit}>
				<h6>Card front</h6>
				<input type="text" name="cardFront" id="cardFront" className="form-input" onChange={HandleInputChange} value={inputs.cardFront} />
				<h6>Card back</h6>
				<input type="text" name="cardBack" id="cardBack" className="form-input" onChange={HandleInputChange} value={inputs.cardBack} />
				<h6/> <button type="submit" className="btn btn-primary" >Save</button>
				{ isError ? (
					<> Sorry, an Error has occured. </>
				  ) : isSuccess ? (
					<> { resultStatus } </>
				  ) : isLoading ? (
					<> loading </>
				  ): null
			   }
			</form>
		</div>
	);
};

export default EditCardModal;
