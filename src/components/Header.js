import React from 'react';
import portrait from '../images/nbrown_profile.jpg';
import '../styles/Header.css';

export default function Header() {
	return (
		<header>
			<img src={portrait} alt='self portrait' />

			<div>
				<h1 id='firstName'>Nicholas</h1>
				<h1 id='lastName'>Brown</h1>
			</div>
		</header>
	);
}
