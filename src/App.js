import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import './App.css';

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Navbar />
			<Switch>
				{/* <Route exact path='/' component={Home} /> */}
				<Route exact path='/nbrown_portfolio' component={Home} />
				<Route
					exact
					path='/nbrown_portfolio/experience'
					component={Experience}
				/>
				<Route exact path='/nbrown_portfolio/portfolio' component={Portfolio} />
				<Route exact path='/nbrown_portfolio/contact' component={Contact} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
