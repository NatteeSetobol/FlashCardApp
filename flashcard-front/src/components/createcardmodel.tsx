import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useCreateCardMutation} from "../services/card"
import { useDispatch, useSelector } from "react-redux"
import { setDeck,setSelectedCards, setSelectedCardIndex } from "../sliceoflife/deck"

type Props = {
	closeDialogCallback:any;
}

const CreateCardModal = (props:Props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [inputs, setInputs] = useState({cardBack: '', cardFront: ''});
	const [clicked, setClicked] = useState(false);
	const [resultStatus, setResultStatus] = useState("");
	const [  CreateNewCard, { data, error,isLoading, isSuccess, isError }  ] = useCreateCardMutation()
	const  myDeck  = useSelector( (state:any) => state.myDecks.selected)
	const dispatch = useDispatch();
	const  myCards = useSelector( (state:any) => state.myDecks.selectedCards)

	const HandleSubmit = (event: any) => {
		event.preventDefault();
		
		CreateNewCard({ deckId: myDeck.id, front: inputs.cardFront, back: inputs.cardBack } )
		setInputs({cardBack: '', cardFront: ''});
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
					dispatch(setSelectedCards(data.cards));
					setResultStatus("card created!");
					props.closeDialogCallback();
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
				<h6/>
				<button type="submit" className="btn btn-primary" >Create Card</button>
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

export default CreateCardModal;
