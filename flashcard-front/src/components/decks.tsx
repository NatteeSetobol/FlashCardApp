import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import CreateDeckModal from './createdeckmodel'
import { useGetAllDecksQuery} from "../services/deck"
import { Deck } from "../models/deck"
import { setDeck,getDeck} from "../sliceoflife/deck"
import { QueryCache } from 'react-query'
import { Link } from 'react-router-dom'
import '../css/deck.css'
import { useHistory } from "react-router-dom"

const Decks = () => {
	let history = useHistory();
	const  myDeck  = useSelector( (state:any) => state.myDecks.selected)

	const editClick = () =>
	{
		history.push("/editdeck/" + myDeck.id + "/");
	}

	return (
		<div className="container">
			<h3 className="decktitle">{ myDeck.name }</h3>
			<nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
				<div className="container-fluid">
					<div className="deckbuttons">
						<button  type="button" className="deckbuttons btn btn-primary">Study</button> 
						<button  type="button" className="deckbuttons btn btn-primary" onClick={editClick}>Edit deck</button>
					</div>
				</div>
			</nav>
			<div className="listcontent">
			</div>
			<div>
				<ul className="list-group">
					<li className="list-group-item d-flex justify-content-between align-items-center">
					    Total cards in deck
						<span className="badge bg-primary rounded-pill">14</span>
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
					    Total cards stuided: 
					    <span className="badge bg-primary rounded-pill">2</span>
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
					    Next Addition:  
						<span className="badge bg-primary rounded-pill">2021-09-04 17:54:29 </span>
					</li>
				</ul>
			</div>
        </div>
	);
}

export default Decks;
