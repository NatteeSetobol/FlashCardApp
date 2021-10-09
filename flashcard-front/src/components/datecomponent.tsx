import { useRef,useState, useEffect } from 'react'
import   TextScrollComponent  from './textscrollcomponent'
import { useDispatch, useSelector } from "react-redux"

type Props = {
	totalTimeCallback:any,
	defaultSettings: number
}

const DateComponent: React.FC<Props> = (props) => {

	const [days ,setDays] = useState(0);
	const [hours,setHours] = useState(0);
	const [mins,setMins] = useState(0);
	const [defaultValue, setDefaultValue]  = useState(0);
	const [ loaded, setLoaded] = useState(false);
	const  delay2= useSelector( (state:any) => state.myDecks.delay2)


	useEffect(() => {
		if (props.defaultSettings > 0)
		{
			if (props.defaultSettings < 60)
			{
				setMins(props.defaultSettings);
			} else 
			if (props.defaultSettings >= 1440)
			{
				let totalDays:number  =( props.defaultSettings / 24) / 60;
				let totalHours:number = ((totalDays * 24 * 60) - props.defaultSettings) / 60;
				let totalMins:number =  (totalDays * 24 * 60) - (totalHours*60) - props.defaultSettings;

				 setDays(totalDays);
				 setHours(totalHours);
				 setMins(totalMins);
			}
			//console.log(props.defaultSettings);
		}
	}, [props.defaultSettings]);





	const daysToSecs = (childData:any) => {
		setDays(childData);
		props.totalTimeCallback( (mins) * (hours*60) + (days*24*60)) 
	}

	const hoursToSecs = (childData:any) => {
		setHours(childData);
		props.totalTimeCallback( (mins) * (hours*60) + (days*24*60)) 

	}
	const minsToSecs = (childData:any) => {
		setHours(childData);
		props.totalTimeCallback( (mins) * (hours*60) + (days*24*60)) 
	}

	return (
		<div>
			<table>
				<thead>
					<tr>
						<td>
							Day
						</td>
						<td>
							Hours
						</td>
						<td>
							Mins
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<TextScrollComponent value={ days } parentCallback = { daysToSecs } />
						</td>
						<td>
							<TextScrollComponent value={ hours } parentCallback = { hoursToSecs } />
						</td>
						<td>
							<TextScrollComponent value={ mins } parentCallback = { minsToSecs } />
						</td>

					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default DateComponent;
