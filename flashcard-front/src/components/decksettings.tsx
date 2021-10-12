import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import DateComponent from './datecomponent'
import { useGetSettingsQuery } from "../services/setting"
import { setDelay1,setDelay2, setDelay3,setDelay4,setDelay5 } from "../sliceoflife/deck"
import { useSaveSettingsMutation} from "../services/setting"

type Props = {
	value:number;
	onDateChanged:any;
}

const DeckSettings: React.FC<Props> = (props)  => {

	const  myDeck  = useSelector( (state:any) => state.myDecks.selected)
	const [count,setCount] = useState(1);
	const { data, error,isLoading, isSuccess, isError }   = useGetSettingsQuery(myDeck.id);
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ cpdValue , setCpdValue] = useState("");
	const [ timerValue , setTimerValue] = useState("");
	const [ randomValue , setRandomValue] = useState(false);
	const [ delay1Value , setDelay1Value] = useState(0);
	const [ delay2Value , setDelay2Value] = useState(0);
	const [ delay3Value , setDelay3Value] = useState(0);
	const [ delay4Value , setDelay4Value] = useState(0);
	const [ delay5Value , setDelay5Value] = useState(0);
	const [ loaded, setLoaded] = useState(false);
	const [ loaded2, setLoaded2] = useState(false);
	const [ loaded3, setLoaded3] = useState(false);
	const [ loaded4, setLoaded4] = useState(false);
	const [  SaveSettings, { }  ] = useSaveSettingsMutation()
	
	const dispatch = useDispatch();

	const  delay1= useSelector( (state:any) => state.myDecks.delay1)
	const  delay2= useSelector( (state:any) => state.myDecks.delay2)
	const  delay3= useSelector( (state:any) => state.myDecks.delay3)
	const  delay4= useSelector( (state:any) => state.myDecks.delay4)
	const  delay5= useSelector( (state:any) => state.myDecks.delay5)


	useEffect(()=> {
		if (loaded == false)
		{
			setDelay1Value(delay1);
			setDelay2Value(delay2);
			setDelay3Value(delay3);
			setDelay4Value(delay4);
			setDelay5Value(delay5);
		}
		//setState({selectedOption: "4"});
	}, [delay1,delay2, delay3,delay4,delay5])


	if (delay1 != -1)
	{
		if (loaded == false)
		{
			setDelay1Value(delay1);
			setLoaded(true);
		}
	}

	if (delay2 != -1)
	{
		if (loaded2 == false)
		{
			setDelay2Value(delay2);
			setLoaded2(true);
		}
	}
	if (delay3 != -1)
	{
		if (loaded3 == false)
		{
			setDelay3Value(delay3);
			setLoaded3(true);
		}
	}
	if (delay4 != -1)
	{
		if (loaded4 == false)
		{
			setDelay4Value(delay4);
			setLoaded4(true);
		}
	}

	const handleCallback = (childData:any) => {
	}

	
	const cardRadioChange =  ( value: string ) => () =>
	{
		setCpdValue(value);
	}

	const timerRadioChange =  ( value: string ) => () =>
	{
		setTimerValue(value);
	}


	const delay1Callback = (childData:any) => {
		dispatch(setDelay1(childData));
	}

	const delay2Callback = (childData:any) => {
		dispatch(setDelay2(childData));
	}

	const delay3Callback = (childData:any) => {
		dispatch(setDelay3(childData));
	}

	const delay4Callback = (childData:any) => {
		dispatch(setDelay4(childData));
	}

	const saveOption = () => {
		//cpdValue - cards per day
		//timerValue - timer value
		//randomValue
	//	delay1Value
		//delay1Value
		//delay1Value
		//delay1Value
		//delay1Value
		SaveSettings({ 'deckid': myDeck.id,  'cardsPerDats':cpdValue, 'Timer': timerValue, 'randomValue': randomValue, 'delay1': delay1Value, 'delay2': delay2Value,'delay3': delay3Value,'delay4': delay4Value,'delay5': delay5Value  });
	}


	if (isSuccess)
	{
		if (isLoaded == false)
		{ 
			if (data)
			{
				setCpdValue("" + data.cardsPerDay);
				setTimerValue("" + data.timer);
				setRandomValue(data.randomize);
				dispatch(setDelay1(data.delay1));
				dispatch(setDelay2(data.delay2));
				dispatch(setDelay3(data.delay3));
				dispatch(setDelay4(data.delay4));
				dispatch(setDelay5(data.delay5));
				setIsLoaded(true);
			}
		}
	}


	return (
		<div>
			<h1>{ myDeck.name }</h1>
			<nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
				<div className="container-fluid">
					<div className="deckbuttons">
						<button  type="button" className="deckbuttons btn btn-primary" onClick={saveOption}>Save</button> 
					</div>
				</div>
			</nav>

			<table className="table">
				<thead>
					<tr>
						<td>
							Deck Options
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Card added Per Day
						</td>
					</tr>
					<tr>
						<td>
							<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
								<input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked={cpdValue == "1"} />
								<label className="btn btn-outline-primary" onClick={cardRadioChange("1")} >1</label>

								<input type="radio" className="btn-check" name="btnradio" id="btnradio2" checked={cpdValue == "5"}  />
								<label className="btn btn-outline-primary" onClick={cardRadioChange("5")} >5</label>

								<input type="radio" className="btn-check"    name="btnradio" id="btnradio3" checked={cpdValue == "10"} />
								<label className="btn btn-outline-primary" onClick={cardRadioChange("10")}  >10</label>

								<input type="radio" className="btn-check" name="btnradio" id="btnradio4" checked={cpdValue == "15"} />
								<label className="btn btn-outline-primary" onClick={cardRadioChange("15")}  >15</label>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							Deck Timer
						</td>
					</tr>
					<tr>
						<td>
							<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
								<input type="radio" className="btn-check" name="btnradio2" id="btnradio1" checked={timerValue == "0"} />
								<label className="btn btn-outline-primary" onClick={timerRadioChange("1")} >Off</label>

								<input type="radio" className="btn-check" name="btnradio2" id="btnradio2" checked={timerValue == "5"}  />
								<label className="btn btn-outline-primary" onClick={timerRadioChange("5")} >5 Mins</label>

								<input type="radio" className="btn-check"    name="btnradio2" id="btnradio3" checked={timerValue == "10"} />
								<label className="btn btn-outline-primary" onClick={timerRadioChange("10")}  >10 Mins</label>

								<input type="radio" className="btn-check" name="btnradio2" id="btnradio4" checked={timerValue == "15"} />
								<label className="btn btn-outline-primary" onClick={timerRadioChange("15")}  >15 Mins</label>

								<input type="radio" className="btn-check" name="btnradio2" id="btnradio5" checked={timerValue == "30"} />
								<label className="btn btn-outline-primary" onClick={timerRadioChange("30")}  >30 Mins</label>

							</div>

						</td>
					</tr>
					<tr>
						<td>
							Randomize Cards
						</td>
					</tr>
					<tr>
						<td>
						<BootstrapSwitchButton
						    checked={randomValue}
						    onlabel='On'
						    offlabel='Off'
						    onChange={(checked: boolean) => {
								setRandomValue(checked);
						    }}
						/>

						</td>
					</tr>
				</tbody>
			</table>
			<table className="table">
				<thead>
					<tr>
						<td>
							Card Options
						</td>
					</tr>
				</thead>
				<tbody >
					<tr>
						<td>

							Delay 1:
							<DateComponent totalTimeCallback={ delay1Callback } defaultSettings = {delay1Value }  />
						</td>
					</tr>
					<tr>
						<td>

							Delay 2:
							<DateComponent totalTimeCallback={ delay2Callback }  defaultSettings={delay2Value}    />
						</td>
					</tr>
						<tr>
						<td>

							Delay 3:
							<DateComponent totalTimeCallback={ delay3Callback }   defaultSettings = {delay3Value }  />
						</td>
					</tr>				
					<tr>
						<td>

							Delay 4:
							<DateComponent totalTimeCallback={ delay4Callback } defaultSettings = {delay4Value }   />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default DeckSettings;
