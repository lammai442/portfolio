import './MobileProject.css';
import { useState } from 'react';
import { iconMap } from '../../data/data.js';
function MobileProject({ url, title, tech, desc, additionalDesc }) {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<section className='mobile__box' data-aos='fade-up'>
			<div className='mobile__frame-box'>
				<div className='mobile__frame'>
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
				<h2>Mobilapp - {title}</h2>
				<p className='mobile__info-paragraph'>{desc}</p>
				<h3>Tekniker som används</h3>
				<section className='icon__tech-box'>
					{tech.map((techName, index) => {
						const IconComponent = iconMap[techName];
						return (
							IconComponent && (
								<section className='icon__item-box'>
									<IconComponent
										key={index}
										size={32}
										title={techName}></IconComponent>
									<p>
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
