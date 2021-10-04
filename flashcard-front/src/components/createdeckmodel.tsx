import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useCreateDeckMutation} from "../services/deck"
import { useDispatch, useSelector } from "react-redux"
import { setDeck } from "../sliceoflife/deck"

const CreateDeckModal = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [inputs, setInputs] = useState({dname: ''});
	const [clicked, setClicked] = useState(false);
	const [resultStatus, setResultStatus] = useState("");
	const [  CreateNewDeck, { data, error,isLoading, isSuccess, isError }  ] = useCreateDeckMutation()
	const dispatch = useDispatch();

	const HandleSubmit = (event: any) => {
		event.preventDefault();
		
		CreateNewDeck({ name: inputs.dname } )
		setInputs({dname: ''});

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
					dispatch(setDeck(data.decks));
					setResultStatus("deck created!");
					handleClose();
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
						        <h6>Deck name</h6>
								<input type="text" name="dname" id="dname" className="form-input" onChange={HandleInputChange} value={inputs.dname} />
								<button type="submit" className="btn btn-primary" >Create Deck</button>
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

export default CreateDeckModal;
