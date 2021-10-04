import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDeleteDeckMutation } from "../services/deck"
import { Deck } from "../models/deck"
import { setDeck,updateCard,setSelectedCards } from "../sliceoflife/deck"

type Props = {
	closeCallback:any;
}

const DeleteDeckModel: React.FC<Props>  = (props) => {
	const [clicked, setClicked] = useState(false);
	const [  DeleteDeck, { data, error,isLoading, isSuccess, isError }  ] = useDeleteDeckMutation()
	const  myDecks  = useSelector( (state:any) => state.myDecks.decks)
	const  selectedDeck = useSelector( (state:any) => state.myDecks.selected)
	const [resultStatus, setResultStatus] = useState("");
	const dispatch = useDispatch();

	const HandleSubmit = (event: any) => {
		event.preventDefault();
		DeleteDeck(selectedDeck);
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
					setResultStatus("Deletion successfull!");
					dispatch(setDeck(data));
					props.closeCallback();
				}
				setClicked(false);
			}
		}
	}


	return (
		<div>
			<form onSubmit={HandleSubmit}>
				<h6>Are you sure you want to delete this?</h6>
				<button type="submit" className="btn btn-primary" >yes</button>
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

export default DeleteDeckModel;
