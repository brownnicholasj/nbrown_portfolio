import React from 'react';
import '../styles/Nav.css';

export default function Nav({ currentPage, handlePageChange }) {
	return (
		<nav>
			<div>
				<a href='#header' onClick={() => handlePageChange('About')}>
					About Me
				</a>
			</div>
			<div>
				<a href='#header' onClick={() => handlePageChange('Work')}>
					My Work
				</a>
			</div>
			<div>
				<a href='#header' onClick={() => handlePageChange('Contact')}>
					Contact
				</a>
			</div>
			<div>
				<a href='#header' onClick={() => handlePageChange('Form')}>
					Send Message
				</a>
			</div>
		</nav>
	);
}
