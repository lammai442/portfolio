import './WebProjects.css';
import { useState } from 'react';
import { iconMap } from '../../data/data.js';
function WebProjects({
	webUrl,
	title,
	tech,
	desc,
	additionalDesc,
	webPageImg,
}) {
	return (
		<section className='web-card__box'>
			<section>
				<a
					href={webUrl}
					className='web-page__link'
					target='_blank'
					rel='noopener noreferrer'>
					<img
						src={webPageImg}
						alt='Image of webpage'
						className='web-page__img'
					/>
				</a>
			</section>
			<section className='mobile__info-box'>
				<h2>{title}</h2>
				<p className='mobile__info-paragraph'>{desc}</p>
				<p className='mobile__info-paragraph'>{additionalDesc}</p>
				<a
					href={webUrl}
					className='link__url'
					aria-label='Link to webpage'>
					Länk
				</a>
				<h3>Tekniker som används</h3>
				<section className='icon__tech-box icon__tech-box--less-gap'>
					{tech.map((techName, index) => {
						const IconComponent = iconMap[techName];
						return (
							IconComponent && (
								<section className='icon__item-box'>
									<IconComponent
										key={index}
										size={26}
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

export default WebProjects;
