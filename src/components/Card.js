import React from 'react';

export default function Card({ name, link, image, git }, key) {
	return (
		<div id='appsection'>
			<h3 key={key}>{name}</h3>
			<a href={link} target='_blank' rel='noreferrer'>
				<img id={key} src={image} alt='screenshot of work' />
			</a>
			<a href={git} className='repo' target='_blank' rel='noreferrer'>
				<h4>Repository</h4>
			</a>
		</div>
	);
}
