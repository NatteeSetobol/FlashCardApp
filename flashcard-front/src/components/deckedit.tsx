import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import CreateDeckModal from './createdeckmodel'
import EditCardModal from './editcardmodel'
import { useGetAllCardsQuery} from "../services/card"
import { Deck } from "../models/deck"
import { setDeck,getDeck} from "../sliceoflife/deck"
import { QueryCache } from 'react-query'
import { Link } from 'react-router-dom'
import CreateCardModal from './createcardmodel'
import { Modal, Button } from 'react-bootstrap';
import { setSelectedCards, setSelectedCardIndex } from "../sliceoflife/deck"
import { Card } from "../models/card"
import DeleteCard from "./deletecard"

const DeckEdit = () => {
	    const  myDeck  = useSelector( (state:any) => state.myDecks.selected)
	    const  myCards = useSelector( (state:any) => state.myDecks.selectedCards)
		const dispatch = useDispatch();
		const { data, error,isLoading, isSuccess, isError }   = useGetAllCardsQuery(myDeck.id);
		const [show, setShow] = useState(false);
		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
		const edithandleClose = () => setShow(false);
		const edithandleShow = () => setShow(true);

		const [ isLoaded, setIsLoaded ] = useState(false);
		const [ isMapped, setIsMapped] = useState(false);

		const editCard = (cardId:number) => () =>
		{
			dispatch(setSelectedCardIndex(cardId));
			edithandleShow();
		}

		const deleteCard = () =>
		{
			alert("delete card");
		}


		const mapIt = (mapData:[]) => (
			mapData.map((card:Card, i) => (
				<tr>
					<td>
						{i+1}
					</td>
					<td>
						{card.front}
					</td>
					<td>
						{card.back}
					</td>
					<td>
						{card.dueDate}
					</td>
					<td>
						<button type="button" className="btn btn-primary" onClick={editCard(i)}>Edit</button>
						<button type="button" className="btn btn-danger" onClick={deleteCard}>Delete</button>
					</td>
				</tr>
			)
		)

		);


		if (isSuccess)
		{
			if (isLoaded == false)
			{
				if (data)
				{
					dispatch(setSelectedCards(data));
					setIsLoaded(true);
					setIsMapped(true);
				}
			}
		}

		return (
		<div className="container">
			<div className="centering">
				<div className="container col-xxl-12 col-xxl-12">
					<div className="row align-items-center">
						<Modal show={show} onHide={handleClose} backdrop="static">
							<Modal.Header>
								<Modal.Title>Create Card</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<CreateCardModal />
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>Close</Button>
							</Modal.Footer>
						</Modal>
					</div>
				</div>
				<div className="row align-items-center">
						<Modal show={show} onHide={edithandleClose} backdrop="static">
							<Modal.Header>
								<Modal.Title>Edit Card</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<EditCardModal />
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={edithandleClose}>Close</Button>
							</Modal.Footer>
						</Modal>
				</div>

				<h3 className="decktitle">{myDeck.name }</h3>
				<nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
					<div className="container-fluid">
						<div className="deckbuttons">
							<button  type="button" className="deckbuttons btn btn-primary" onClick={handleShow}>+</button> 
						</div>
					</div>
				</nav>
				<div>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Front</th>
								<th scope="col">Back</th>
								<th scope="col">Due</th>
								<th scope="col">Actions</th>
							</tr>
					</thead>
					<tbody>
						{mapIt(myCards)}
					</tbody>
				</table>
			</div>
		</div>
	</div>);
};

export default DeckEdit;
