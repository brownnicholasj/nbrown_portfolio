import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<div className='body'>
			<Header />
			<Nav />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
