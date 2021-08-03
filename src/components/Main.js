import React, { useState } from 'react';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Form from './Form';
import '../styles/Main.css';

export default function Main() {
	const [currentPage, setCurrentPage] = useState('About');

	const renderPage = (page) => {
		if (currentPage === 'About') {
			return <About />;
		}
		if (currentPage === 'Work') {
			return <Work />;
		}
		if (currentPage === 'Contact') {
			return <Contact />;
		}
		return <Form />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<main>
			<Nav currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
		</main>
	);
}
