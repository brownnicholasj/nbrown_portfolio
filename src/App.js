import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import BannerExample from './components/Portfolio2';

import './App.css';

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/experience' component={Experience} />
				<Route exact path='/portfolio' component={Portfolio} />
				<Route exact path='/contact' component={Contact} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
