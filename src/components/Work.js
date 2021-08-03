import React from 'react';
import Card from './Card';
import jeopardyimage from '../images/jeopardy.jpg';
import eventimage from '../images/eventplanning.jpg';
import weatherimage from '../images/weatherdash.jpg';
import '../styles/Work.css';

const projectArr = [
	{
		name: 'Jeopardy!',
		link: 'https://brownnicholasj.github.io/jeopardy-game/',
		image: jeopardyimage,
		git: 'https://github.com/brownnicholasj/jeopardy-game',
		priority: '1',
	},
	{
		name: 'The Event Planning',
		link: 'https://the-event-planning.herokuapp.com/',
		image: eventimage,
		git: 'https://github.com/brownnicholasj/the-event-planning',
		priority: '2',
	},
	{
		name: 'Weather Dashboard',
		link: 'https://brownnicholasj.github.io/weather_dashboard/',
		image: weatherimage,
		git: 'https://github.com/brownnicholasj/weather_dashboard',
		priority: '3',
	},
];

export default function Work() {
	return (
		<section id='works'>
			<h2>My Works</h2>
			<div id='appsection'>
				{projectArr.map((value) => (
					<Card
						name={value.name}
						link={value.link}
						image={value.image}
						git={value.git}
						priority={value.priority}
						key={value.priority}
					/>
				))}
			</div>
		</section>
	);
}
