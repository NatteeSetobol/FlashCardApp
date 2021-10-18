import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import '../css/cardlayout.css'
import { useGetAllDueCardsQuery } from "../services/card"
import {IncreaseIndex, setCards, setFront, setBack} from "../sliceoflife/study"

const CardLayout:React.FC<unknown> = () => {
	const [ showAnswer, setShowAnswer] = useState(false);
	const [ showAnswerButton, setShowAnswerButton] = useState(true);
	const [ showRatingButtons, setShowRatingButtons] = useState(false);
	const  myDeck  = useSelector( (state:any) => state.myDecks.selected)
	const [ isDataLoaded, setIsDataLoaded] = useState(false);
	const [ front, setUIFront] = useState("");
	const [ back, setUIBack] = useState("");
	const  myStudy = useSelector( (state:any) => state.myStudy)
	const { data, error,isLoading, isSuccess, isError }   = useGetAllDueCardsQuery(myDeck.id);
	const dispatch = useDispatch();

	useEffect(()=> {
		
		setUIFront(myStudy.front);
		setUIBack(myStudy.back);
	}, [  myStudy.back])

	const onClickShowAnswer = () =>
	{
		setShowAnswer(true);
		setShowAnswerButton(false);
		setShowRatingButtons(true);
		dispatch(IncreaseIndex("none"));

	}

	const onChoseRating = (ratingNumber: number) => ()  =>
	{
		setShowAnswer(false);
		setShowAnswerButton(true);
		setShowRatingButtons(false);


		dispatch(setFront(myStudy.cards[myStudy.index].front));
		dispatch(setBack(myStudy.cards[myStudy.index].back));
	}

	if (isSuccess)
	{
		if (data)
		{
			if (isDataLoaded == false)
			{
				dispatch(IncreaseIndex("none"));
				dispatch(setCards(data));
				dispatch(setFront(data[0].front));
				dispatch(setBack(data[0].back));
				
				setIsDataLoaded(true);
			}
		}
	}

	return (
		<div>
			<div className="flexbox">
				<div className="box1">
						
				</div>
				<div className="box2">
					<div className="topspace">
						{ isSuccess ? (
						<div>
						<div>
							<label className="col-form-label col-form-label-sm">
								<h3>{ front }</h3>
							</label>
						</div>
						<div className="buttonmargin" >
							{showAnswer && (
								<label className="col-form-label col-form-label-sm answerspace">
									{ back }
								</label>
							)}
						</div>
						<div className="fake">
						<br /><br />
						</div>
						<div className="buttonmargin">
							{showAnswerButton && (
							<button className="btn btn-primary buttonmargin"  onClick={onClickShowAnswer} >Show Answer</button>
							)}

						</div>
						{showRatingButtons && (
						<div className="buttonmargin">
							<br /> <br />
							<div className="btn-group" role="group" aria-label="Basic mixed styles example">
								<button type="button" className="btn btn-success" onClick={onChoseRating(5)}>5 - Perfect</button>
								<button type="button" className="btn btn-success" onClick={onChoseRating(4)}>4 - Correct Response </button>
								<button type="button" className="btn btn-success" onClick={onChoseRating(3)}>3 - Correct Response with problems</button>
								<button type="button" className="btn btn-warning" onClick={onChoseRating(2)}>2 - Incorrect Response; correct easy to recall</button>
								<button type="button" className="btn btn-warning" onClick={onChoseRating(1)}>1 - Incorrect Response; correct one to remember</button>
								<button type="button" className="btn btn-warning" onClick={onChoseRating(0)}>0 - Incorrect Response; blank out</button>
							</div>
						</div>
						)}
						</div>
						) : isError ?  (
							<div>
								Sorry an Error has occured.
							</div>
						) : isLoading ? (
							<div>
								Loading..
							</div>
						): null
						}

					</div>
				</div>
				<div className="box1">
						
				</div>
			</div>
		</div>
	);
}


export default CardLayout;
