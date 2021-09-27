import React from 'react'
import { useState, useEffect } from 'react'


type Props = {
	value:number;
	parentCallback:any;
}

const TextScrollComponent: React.FC<Props> = (props) => {
	
	const [count,setCount] = useState("");

	useEffect(() => {
	}, [null]);

	
	const handleOnChange = (e:any) => {
		setCount(e.target.value);
		props.parentCallback(e.target.value);
	}

	const increaseValue = () => {
		let oldValue:number = +count;
		++oldValue;
		setCount("" + oldValue);
		props.parentCallback("" + oldValue);
	}

	const decreaseValue = () => {
		let oldValue:number = +count;
		--oldValue;
		setCount("" + oldValue);
		props.parentCallback("" + oldValue);
	}

	return (
		<div> 
			<div className="input-group">
				<button className="btn btn-outline-secondary" type="button" onClick={increaseValue}>+</button>
				<input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" value={count} onChange={(e) => {handleOnChange(e) }} />
				<button className="btn btn-outline-secondary" type="button" onClick={decreaseValue}>-</button>
			 </div>
		</div>
	)
}

export default TextScrollComponent;
