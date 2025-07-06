import './MobileProject.css';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaHtml5, FaCss3Alt, FaFigma, FaGithub, FaReact } from 'react-icons/fa';
import { FaPeopleLine } from 'react-icons/fa6';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { useState } from 'react';
function MobileProject({ url, title, tech, desc, additionalDesc }) {
	const [isLoaded, setIsLoaded] = useState(false);

	const iconMap = {
		JavaScript: TbBrandJavascript,
		HTML: FaHtml5,
		CSS: FaCss3Alt,
		Figma: FaFigma,
		Git: FaGithub,
		Agilt: FaPeopleLine,
		VScode: BiLogoVisualStudio,
		React: FaReact,
	};

	return (
		<section className='mobile__box'>
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
				<p className='mobile__info-paragraph'>{additionalDesc}</p>
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
