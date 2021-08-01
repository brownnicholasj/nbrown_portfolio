import React from 'react';
import portrait from '../images/nbrown_profile.jpg';

export default function Header() {
	return (
		<header>
			<img
				src={portrait}
				alt='self portrait'
				style={{
					maxHeight: '150px',
					objectFit: 'scale-down',
					justifySelf: 'flex-start',
				}}
			/>

			<div>
				<h1>Nicholas</h1>
				<h1>Brown</h1>
			</div>
		</header>
	);
}
