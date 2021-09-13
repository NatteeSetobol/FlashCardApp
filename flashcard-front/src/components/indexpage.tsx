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

const IndexPage:React.FC<unknown> = () => {
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
					<Link to={`/settings/${deck.id}`}>Settings</Link>
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
			<br/>
			<CreateDeckModal />
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Deck Name</th>
						<th scope="col">Due Date</th>
						<th scope="col">Total Cards</th>
						<th scope="col">Total Studed</th>
						<th scope="col">Settings</th>
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
	);
}

export default IndexPage;
