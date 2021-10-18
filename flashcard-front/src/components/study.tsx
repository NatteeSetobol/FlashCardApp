import React from 'react'
import CardLayout from './cardlayout'
import '../css/study.css'

const Study = () => {
	return (
		<div>
			<div className="flexbox">
				<div className="timebox">
					Time: 10:00
				</div>
			</div>
			<div className="flexbox">
				<div className="topbox">
					    
				</div>
			</div>
			<div className="flexbox">
				<div className="middlebox">
					<CardLayout />
				</div>
			</div>
			<div className="flexbox">
				<div className="bottombox">
					    
				</div>
			</div>
		</div>
	)
}

export default Study;
