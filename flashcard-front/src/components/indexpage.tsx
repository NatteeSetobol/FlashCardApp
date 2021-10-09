import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import CreateDeckModal from './createdeckmodel'
import { useGetAllDecksQuery} from "../services/deck"
import { Deck } from "../models/deck"
import { setDeck,getDeck} from "../sliceoflife/deck"
import { QueryCache } from 'react-query'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import { setSelectedDeck } from "../sliceoflife/deck"
import '../css/deck.css'
import '../css/index.css'
import { Modal, Button } from 'react-bootstrap';
import DeleteDeckModel from './deletedeckmodel'
const IndexPage:React.FC<unknown> = () => {

	const [showDelete, setShowDelete] = useState(false);
	const deleteClose = () => setShowDelete(false);
	const deleteShow = () => setShowDelete(true);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	const { data, error,isLoading, isSuccess, isError }   = useGetAllDecksQuery("");
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ isMapped, setIsMapped] = useState(false);
	const  myDecks  = useSelector( (state:any) => state.myDecks.decks)
	const dispatch = useDispatch();
	let history = useHistory();

	useEffect(()=> {
		setIsLoaded(false);
	}, [])
 

    //<Link to={`/decks/${deck.id}`}>{deck.name}</Link>

    const gotoDeck = (deck:any)  => (event:any) =>
    {

		dispatch(setSelectedDeck(deck));
		history.push("/decks/" + deck.id + "/");
    }

    const settings = (deck:any) => (event:any) =>
    {
		dispatch(setSelectedDeck(deck));
		history.push("/settings/" + deck.id + "/");
    }

    const deleteDeck = (deck:any) => (event:any) =>
    {
		dispatch(setSelectedDeck(deck));
		deleteShow();
    }

	const closeModel = (childData:any) => {
		deleteClose();
	}

	const closeCreateDeckModal = (childData:any) => {
		handleClose();
	}


	const mapIt = (mapData:[]) => (
		mapData.map((deck:Deck) => (
			<tr>
				<td>
					{deck.id}
				</td>
				<td>
					<a href="#" onClick={gotoDeck(deck) }>{deck.name}</a>
				</td>
				<td>
					{deck.dueDate}
				</td>
				<td>
					{deck.totalCards}
				</td>
				<td>
					{deck.totalStudied}
				</td>
				<td>
					<a href="#" onClick={settings(deck)}>Settings</a>
					<button className="btn btn-danger deleteButton" onClick={deleteDeck(deck)}>Delete</button>
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
				/*
				*/
				dispatch(setDeck(data));
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
						<Modal show={showDelete} onHide={deleteClose} backdrop="static">
							<Modal.Header>
								<Modal.Title>Delete Deck</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<DeleteDeckModel closeCallback={closeModel}/>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={deleteClose}>Close</Button>
							</Modal.Footer>
						</Modal>
					</div>
					<div className="row align-items-center">
						<Modal show={show} onHide={handleClose} backdrop="static">
							<Modal.Header>
								<Modal.Title>Create Deck</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<CreateDeckModal closeCallback={closeCreateDeckModal} />
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>Close</Button>
							</Modal.Footer>
						</Modal>
					</div>
				   </div>
						<nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
							<div className="container-fluid">
								<div>
									<button onClick={handleShow} type="button" className="btn btn-primary">Add Deck</button>
								</div>
							</div>
						</nav>

			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Deck Name</th>
						<th scope="col">Due Date</th>
						<th scope="col">Total Cards</th>
						<th scope="col">Total Studed</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{mapIt(myDecks) }
								{ isError ? (
										<> Sorry, an Error has occured. </>
									) : isSuccess ? (
										<> {  }  </>
									) : isLoading ? (
										<> loading </>
									): null
								}
				</tbody>
			</table>


			</div>
		</div>
	);
}

export default IndexPage;
