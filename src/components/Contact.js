import React from 'react';

export default function Contact() {
	return (
		<div>
			<h2>contact section</h2>
			<figure id='resume'>
				<a
					href='https://brownnicholasj.github.io/nbrown_portfolio/assets/images/NicholasBrown_resume.pdf'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src='https://img.icons8.com/ios/452/open-resume.png'
						alt='resume logo'
					/>
					<p>Resume</p>
				</a>
			</figure>
			<figure id='linkedin'>
				<a
					href='https://www.linkedin.com/in/nibrown/'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src='https://cdn2.iconfinder.com/data/icons/social-media-with-original-colors/256/icon-linkedin.png'
						alt='linkedin logo'
					/>
					<p>Linkedin</p>
				</a>
			</figure>
			<figure id='github'>
				<a
					href='https://github.com/brownnicholasj'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src='https://cdn1.iconfinder.com/data/icons/social-media-vol-2-1/24/_github_copy-256.png'
						alt='github logo'
					/>
					<p>GitHub</p>
				</a>
			</figure>
		</div>
	);
}
