import React from 'react';
import '../styles/Footer.css';

const timestamp = document.lastModified;

export default function Footer() {
	return (
		<footer>
			Last Modified: {timestamp}
			<br />
			Contact: see resume
		</footer>
	);
}
