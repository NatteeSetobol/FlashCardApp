import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import '../css/cardlayout.css'
import { useSubmitCardMutation,useGetAllDueCardsQuery } from "../services/card"
import {setEaseFactor, setCardInterval,setRep,setQuality,IncreaseIndex, setCards, setFront, setBack} from "../sliceoflife/study"

const CardLayout:React.FC<unknown> = () => {

	const [ hasCards, setHasCards] = useState(true);
	const [ showAnswer, setShowAnswer] = useState(false);
	const [ showAnswerButton, setShowAnswerButton] = useState(true);
	const [ showRatingButtons, setShowRatingButtons] = useState(false);
	const  myDeck  = useSelector( (state:any) => state.myDecks.selected)
	const [ isDataLoaded, setIsDataLoaded] = useState(false);
	const [ front, setUIFront] = useState("");
	const [ back, setUIBack] = useState("");
	const  myStudy = useSelector( (state:any) => state.myStudy)
	const { data, error,isLoading, isSuccess, isError }   = useGetAllDueCardsQuery(myDeck.id);
	const [  SubmitCard, submitCardDat = { data, error, isLoading, isSuccess, isError}  ] = useSubmitCardMutation()
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
		let newId;
		let newQuality;
		let newInterval;
		let newEaseFactor;
		let newRepetitions;
		let newRep;

		setShowAnswer(false);
		setShowAnswerButton(true);
		setShowRatingButtons(false);

		dispatch(setFront(myStudy.cards[myStudy.index].front));
		dispatch(setBack(myStudy.cards[myStudy.index].back));

		newEaseFactor= myStudy.cards[myStudy.lastIndex].easeFactor;
		if (ratingNumber >= 3)
		{

			switch(myStudy.cards[myStudy.lastIndex].repetitions)
			{
				case 0:
				{
					newInterval= 1;
					dispatch(setCardInterval(1));
					break;
				}
				case 1:
				{
					newInterval = 6;
					dispatch(setCardInterval(6));
					break;
				}
				default:
				{
					newInterval =  (myStudy.cards[myStudy.lastIndex].interval * myStudy.cards[myStudy.lastIndex].easeFactor)
					dispatch(setCardInterval(newInterval));
					break;
				}
			}

			newRepetitions  = myStudy.cards[myStudy.lastIndex].repetitions + 1;
		
			dispatch(setRep(newRepetitions));
			newEaseFactor= myStudy.cards[myStudy.lastIndex].easeFactor + (0.1 - (5-myStudy.cards[myStudy.lastIndex].quality) * ( 0.08  +  (5-myStudy.cards[myStudy.lastIndex].quality) * 0.02 ) )

			if (myStudy.cards[myStudy.lastIndex].interval > 0)
			{

			}
		} else {
			newInterval = 1;
			newRepetitions = 0;
			dispatch(setRep(0));
			dispatch(setCardInterval(1));
		}

		if (myStudy.cards[myStudy.lastIndex].easeFactor < 1.3)
		{
			newEaseFactor = 1.3;
			dispatch(setEaseFactor(1.3));
		}

		dispatch(setQuality(ratingNumber));

		newId = myStudy.cards[myStudy.index].id;
		newQuality = ratingNumber;

		SubmitCard({'id': newId, 'quality': newQuality, 'interval': newInterval, 'easeFactor': newEaseFactor, 'repetitions': newRepetitions  });
		
	}

	if (isSuccess)
	{
		if (data)
		{
			if (isDataLoaded == false)
			{
				if (data.length != 0)
				{
					dispatch(IncreaseIndex("none"));
					dispatch(setCards(data));
					dispatch(setFront(data[0].front));
					dispatch(setBack(data[0].back));
				} else {
					setHasCards(false);
				}
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
						{ isSuccess && hasCards ? (
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
						): (
						<div>
							<h3>
								Error can't not load cards from your deck. Maybe there's no cards in the deck?
							</h3>
						</div>
						)
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
