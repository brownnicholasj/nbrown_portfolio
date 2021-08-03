import React from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Form from './Form';
import '../styles/Main.css';

export default function Main() {
	return (
		<main>
			<About />
			<Work />
			<Contact />
			<Form />
		</main>
	);
}
