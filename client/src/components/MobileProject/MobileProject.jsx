import './MobileProject.css';
import { useState } from 'react';
import { iconMap } from '../../data/data.js';
import LinkElement from '../LinkElement/LinkElement.jsx';
function MobileProject({ url, title, tech, desc, git }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [wiggle, setWiggle] = useState(false);

	const handleWiggle = (trigger) => {
		if (trigger) {
			setWiggle(true);

			setTimeout(() => {
				setWiggle(false);
			}, 1000);
		}
	};

	return (
		<section className='mobile__box' data-aos='fade-up'>
			<div className='mobile__frame-box'>
				<div
					className={
						wiggle
							? 'mobile__frame mobile__wiggle'
							: 'mobile__frame'
					}>
					{!isLoaded && (
						<section className='loading__box'>
							<div className='loading__spinner'></div>
							<p className='loading__text'>Laddar sidan...</p>
						</section>
					)}
					<iframe
						src={url}
						title='Mobilapp'
						className='mobile__iframe'
						onLoad={() => setIsLoaded(true)}></iframe>
				</div>
			</div>
			<section className='mobile__info-box'>
				<h2 className='mobile__title'>Mobilapp - {title}</h2>
				<p className='mobile__info-paragraph'>{desc}</p>
				<section className='link__box'>
					<LinkElement
						text={
							<>
								<span className='arrow'>⬅</span> Demo
							</>
						}
						linkStyle={'link__url link__url-demo link__url--wiggle'}
						handleWiggle={handleWiggle}
						setWiggle={setWiggle}
					/>
					<LinkElement
						text={'Git'}
						linkStyle={'link__url link__url--white'}
						webUrl={git}
					/>
				</section>
				<h3>Tekniker som används</h3>
				<section className='icon__tech-box'>
					{tech.map((techName, index) => {
						const IconComponent = iconMap[techName];
						return (
							IconComponent && (
								<section className='icon__item-box' key={index}>
									<IconComponent size={32}></IconComponent>
									<p className='icon__text'>
										{techName === 'VScode'
											? 'VS code'
											: techName}
									</p>
								</section>
							)
						);
					})}
				</section>
			</section>
		</section>
	);
}

export default MobileProject;
