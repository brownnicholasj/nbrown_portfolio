import React from 'react';

export default function Nav() {
	const linkStyle = {
		border: '2px solid black',
		boxShadow: '2px 4px black',
		backgroundImage: 'linear-gradient(to right, black, rgb(71, 1, 1), black)',
		padding: '1%',
		margin: 'auto',
		width: '150px',
		fontSize: '1em',
		textAlign: 'center',
	};

	return (
		<nav>
			<section
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					backgroundColor: 'black',
					padding: '5px',
				}}
			>
				<div style={linkStyle}>
					<a href='#aboutme'>About Me</a>
				</div>
				<div style={linkStyle}>
					<a href='#works'>My Work</a>
				</div>
				<div style={linkStyle}>
					<a href='#contact'>Contact</a>
				</div>
			</section>
		</nav>
	);
}
