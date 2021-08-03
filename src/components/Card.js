import React from 'react';

export default function Card({ name, link, image, git, priority }) {
	return (
		<article id={`application-${priority}`}>
			<h3 key={priority}>{name}</h3>
			<a href={link} target='_blank' rel='noreferrer'>
				<img id={`app${priority}`} src={image} alt='screenshot of work' />
			</a>
			<a href={git} className='repo' target='_blank' rel='noreferrer'>
				<h4 className='repo'>Repository</h4>
			</a>
		</article>
	);
}
