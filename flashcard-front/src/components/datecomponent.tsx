import { useState, useEffect } from 'react'
import   TextScrollComponent  from './textscrollcomponent'

const DateComponent = () => {

	const [days ,setDays] = useState(0);
	const [hours,setHours] = useState(0);
	const [mins,setMins] = useState(0);

	useEffect(() => {
		setDays(0);
		setHours(0);
		setMins(0);
	}, [null]);


	const daysToSecs = (childData:any) => {
		setDays(childData);
	}

	const hoursToSecs = (childData:any) => {
		setHours(childData);

	}
	const minsToSecs = (childData:any) => {
		setHours(childData);
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
