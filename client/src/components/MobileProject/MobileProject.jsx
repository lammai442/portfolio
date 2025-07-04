import './MobileProject.css';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { section } from 'framer-motion/client';
function MobileProject({ url, title, tech }) {
	const iconMap = {
		JavaScript: TbBrandJavascript,
		html: FaHtml5,
		css: FaCss3Alt,
	};

	return (
		<section className='mobile__box'>
			<div className='mobile__frame-box'>
				<div className='mobile__frame'>
					<iframe
						src={url}
						title='Mobilapp'
						className='mobile__iframe'></iframe>
				</div>
			</div>
			<section>
				<h2>Mobilapp - {title}</h2>
				<p>
					En interaktiv app där användaren kan beställa mat och med
					adminsida även kunna redigera menyn.
				</p>
				<h3>Tekniker som används</h3>
				{tech.map((techName, index) => {
					const IconComponent = iconMap[techName];
					return (
						IconComponent && (
							<section className='icon__box'>
								<IconComponent
									key={index}
									size={32}
									title={techName}></IconComponent>
								<p>{techName}</p>
							</section>
						)
					);
				})}
			</section>
		</section>
	);
}

export default MobileProject;
