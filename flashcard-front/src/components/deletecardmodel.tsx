import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDeleteCardMutation } from "../services/card"
import { Card } from "../models/card"
import { setDeck,updateCard,setSelectedCards } from "../sliceoflife/deck"

type Props = {
	CloseDeleteModal: any
}

const DeleteCardModel: React.FC<Props>  = (props) => {
	const [deleteShow, setDeleteShow] = useState(false);
	const handleDeleteClose = () => setDeleteShow(false);
	const handleDeleteShow = () => setDeleteShow(true);
	const [clicked, setClicked] = useState(false);
	const [resultStatus, setResultStatus] = useState("");
	const [  DeleteCard, cardResult  ] = useDeleteCardMutation()
	const dispatch = useDispatch();
	const  myCards = useSelector( (state:any) => state.myDecks.selectedCards)
	const  myDeck  = useSelector( (state:any) => state.myDecks)

	const HandleSubmit = (event:any)  => {
		event.preventDefault();
		setClicked(true);
		let editCard:Card = myDeck.selectedCards[myDeck.selectedCardIndex];
		//let newCard:Card = { id: editCard.id ,deckId: 0, front: '', back:'', dueDate: '', quality: 0, interval: 0, easeFactor: 0.0, repetitions: 0 };
		DeleteCard(  { id: editCard.id ,deckId: 0, front: '', back:''})
		props.CloseDeleteModal();
	}

	
	if (clicked)
	{
		//if (isSuccess)
		//{
			if (cardResult.data)
			{
				console.log("here");
				dispatch(setSelectedCards(cardResult.data));
				setResultStatus("Deletion successfull!");
				setClicked(false);

			}
		//}

	}
	


	return (
		<div>
			<form onSubmit={HandleSubmit}>
				<h6>Are you sure you want to delete this?</h6>
				<button type="submit" className="btn btn-primary"  >yes</button>
				<button type="submit" className="btn btn-primary" >no</button>
				{cardResult.isError ? (
					<> Sorry, an Error has occured. </>
				  ) : cardResult.isSuccess ? (
					<> { resultStatus } </>
				  ) : cardResult.isLoading ? (
					<> loading </>
				  ): cardResult.data ? ( <> here  </> ) 
				  :  null
			   }

			</form>
		</div>
	);
};

export default DeleteCardModel;

