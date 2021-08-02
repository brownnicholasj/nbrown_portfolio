import React from 'react';
import jeopardyimage from '../images/jeopardy.jpg';
import eventimage from '../images/eventplanning.jpg';
import weatherimage from '../images/weatherdash.jpg';

const projectArr = [
	{
		name: 'Jeopardy!',
		link: 'https://brownnicholasj.github.io/jeopardy-game/',
		image: jeopardyimage,
		git: 'https://github.com/brownnicholasj/jeopardy-game',
	},
	{
		name: 'The Event Planning',
		link: 'https://the-event-planning.herokuapp.com/',
		image: eventimage,
		git: 'https://github.com/brownnicholasj/the-event-planning',
	},
	{
		name: 'Weather Dashboard',
		link: 'https://brownnicholasj.github.io/weather_dashboard/',
		image: weatherimage,
		git: 'https://github.com/brownnicholasj/weather_dashboard',
	},
];

export default function Work() {
	return (
		<section>
			<h2>work section</h2>
			{projectArr.map((value, index) => {
				return (
					<div id='appsection'>
						<h3 id={index}>{value.name}</h3>
						<a href={value.link} target='_blank' rel='noreferrer'>
							<img id={index} src={value.image} alt='screenshot of work' />
						</a>
						<a
							href={value.git}
							className='repo'
							target='_blank'
							rel='noreferrer'
						>
							<h4>Repository</h4>
						</a>
					</div>
				);
			})}
		</section>
	);
}
