import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
	return (
		<div className='body'>
			<Header />
			<Nav />
			<Main />
		</div>
	);
}

export default App;
