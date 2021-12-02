import React from 'react'
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import  LoginPage from '../components/loginpage'
import  IndexPage from '../components/indexpage'
import  Decks from '../components/decks'
import  DeckEdit from '../components/deckedit'
import  DeckSettings from '../components/decksettings'
import  Study from '../components/study'

const AppRoutes: React.FC<unknown> = (props) => {
	return (
		<Switch>
			<Route exact path='/' component={LoginPage} />
			<Route exact path='/index' component={IndexPage} />
			<Route exact path='/decks/:deckId' component={Decks} />
			<Route exact path='/editdeck/:deckId' component={DeckEdit} />
			<Route exact path='/settings/:deckId' component={DeckSettings } />
			<Route exact path='/study/:deckId' component={Study} />
		</Switch>
	);
}

export default AppRoutes;
