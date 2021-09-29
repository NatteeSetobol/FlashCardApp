import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import DateComponent from './datecomponent'


type Props = {
	value:number;
	onDateChanged:any;
}

const DeckSettings: React.FC<Props> = (props)  => {

	const  myDeck  = useSelector( (state:any) => state.myDecks.selected)
	const [count,setCount] = useState(1);

	useEffect(() => {
	}, [null]);

	const handleCallback = (childData:any) => {
		console.log(childData);
	}

	return (
		<div>
			<h1>{ myDeck.name }</h1>
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
							<ButtonGroup aria-label="Basic example">
								<Button variant="secondary">1</Button>
								<Button variant="secondary">5</Button>
								<Button variant="secondary">10</Button>
								<Button variant="secondary">30</Button>
								<Button variant="secondary">80</Button>
								<Button variant="secondary">100</Button>
						    </ButtonGroup>
						</td>
					</tr>
					<tr>
						<td>
							Deck Timer
						</td>
					</tr>
					<tr>
						<td>
							<ButtonGroup aria-label="Basic example">
								<Button variant="secondary">Off</Button>
								<Button variant="secondary">5 mins</Button>
								<Button variant="secondary">10 mins</Button>
								<Button variant="secondary">15 mins</Button>
								<Button variant="secondary">30 mins</Button>
						    </ButtonGroup>
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
						    checked={false}
						    onlabel='On'
						    offlabel='Off'
						    onChange={(checked: boolean) => {
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
							<DateComponent  />
						</td>
					</tr>
					<tr>
						<td>

							Delay 2:
							<DateComponent />
						</td>
					</tr>
						<tr>
						<td>

							Delay 3:
							<DateComponent />
						</td>
					</tr>				<tr>
						<td>

							Delay 4:
							<DateComponent />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default DeckSettings;
