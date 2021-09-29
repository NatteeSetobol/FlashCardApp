import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDeleteDeckMutation } from "../services/deck"
import { Deck } from "../models/deck"
import { setDeck,updateCard,setSelectedCards } from "../sliceoflife/deck"



const DeleteDeckModel = () => {
	const [clicked, setClicked] = useState(false);
	const [  DeleteDeck, { data, error,isLoading, isSuccess, isError }  ] = useDeleteDeckMutation()
	const  myDecks  = useSelector( (state:any) => state.myDecks.decks)
	const  selectedDeck = useSelector( (state:any) => state.myDecks.selected)

	const HandleSubmit = (event: any) => {
		event.preventDefault();
		console.log(selectedDeck);
		setClicked(true);
	}

	return (
		<div>
			<h6>Are you sure you want to delete this?</h6>
			<h6/> <button type="submit" className="btn btn-primary" >yes</button>
			<button type="submit" className="btn btn-primary" >no</button>
		</div>
	);
};

export default DeleteDeckModel;
