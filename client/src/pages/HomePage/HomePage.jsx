import Header from '../../components/Header/Header';
import profileimg from '../../assets/cv-img-round.png';
import './HomePage.css';
import { FaLinkedin, FaGithubSquare, FaAngleUp } from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';
import { useRef } from 'react';
import Contact from '../../components/Contact/Contact';
import MobileProject from '../../components/MobileProject/MobileProject';
import { mobileProjects, webProjects } from '../../data/data.js';
import WebProjects from '../../components/WebProjects/WebProjects.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import TimeLine from '../../components/TimeLine/TimeLine.jsx';
import HobbyProjects from '../../components/HobbyProjects/HobbyProjects.jsx';
import { hobbyProjects } from '../../data/data.js';
import LinkElement from '../../components/LinkElement/LinkElement.jsx';
import cv from '../../assets/cv/lam-mai-CV.pdf';
function HomePage() {
	const projectRef = useRef(null);
	const experienceRef = useRef(null);
	const contactRef = useRef(null);
	const toTopRef = useRef(null);
	const hobbiesRef = useRef(null);

	const titles = ['Webbutvecklare', 'Pedagogik', 'Webbutvecklare'];

	const scrollToSection = (section) => {
		if (section === 'experience') {
			experienceRef.current.scrollIntoView({ behavior: 'smooth' });
		} else if (section === 'project') {
			projectRef.current.scrollIntoView({ behavior: 'smooth' });
		} else if (section === 'contact') {
			contactRef.current.scrollIntoView({ behavior: 'smooth' });
		} else if (section === 'toTop') {
			toTopRef.current.scrollIntoView({ behavior: 'smooth' });
		} else if (section === 'hobbieproject') {
			hobbiesRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	// Fadeing effect
	useEffect(() => {
		AOS.init({
			duration: 1500,
			easing: 'ease-in-out-sine',
			once: true,
		});
	}, []);

	return (
		<div className='wrapper'>
			<div ref={toTopRef}></div>
			<Header scrollToSection={scrollToSection} />
			<main className='main__homepage'>
				<button
					className='top-scroll-btn__box'
					onClick={() => {
						scrollToSection('toTop');
					}}>
					<FaAngleUp className='top-scroll-btn__icon' />
				</button>
				<section className='info__box'>
					<img
						src={profileimg}
						alt='Profile image'
						className='info__left-img'
					/>
					<section className='info__right-box'>
						<p className='info__right-top-txt'>
							Hej, kul att du ville kika in på mig!
						</p>
						<section className='info__title-container'>
							{titles.map((t, index) => {
								return (
									<span key={index} className='info__title'>
										{t}
									</span>
								);
							})}
						</section>

						<section className='info__right-links-box'>
							<a
								href='http://www.linkedin.com/in/lam-mai'
								target='_blank'>
								<FaLinkedin className='info__right-links' />
							</a>
							<a
								href='https://github.com/lammai442'
								target='_blank'>
								<FaGithubSquare className='info__right-links' />
							</a>
							<a
								href='mailto:lam.mai442@gmail.com'
								target='_blank'>
								<MdOutgoingMail className='info__right-links' />
							</a>
						</section>
						<section className='link__box'>
							<LinkElement
								webUrl={cv}
								linkStyle={'link__url link__url--white'}
								text={'CV'}
							/>
						</section>
					</section>
				</section>
				<hr />
				<section ref={projectRef} className='section__box'>
					<h2 className='section__title'>PROJEKT</h2>
					{mobileProjects.map((m, index) => {
						return (
							<MobileProject
								key={index}
								url={m.url}
								title={m.title}
								tech={m.tech}
								desc={m.desc}
								additionalDesc={m.additionalDesc}
							/>
						);
					})}
					<section className='projects__box' data-aos='fade-up'>
						<h2 className='projects__title'>Webbsidor</h2>
						<section className='web-projects__items-box'>
							{webProjects.map((w, index) => {
								return (
									<WebProjects
										key={index}
										webUrl={w.webUrl}
										title={w.title}
										tech={w.tech}
										desc={w.desc}
										additionalDesc={w.additionalDesc}
										webPageImg={w.webPageImg}
										gitUrl={w.git}
									/>
								);
							})}
						</section>
					</section>
				</section>
				<hr />
				<section ref={experienceRef} className='section__box'>
					<h2 className='section__title'>Erfarenheter</h2>
					<TimeLine scrollToSection={scrollToSection} />
				</section>
				<hr />
				<section
					ref={hobbiesRef}
					className='section__box'
					data-aos='fade-up'>
					<h2 className='section__title'>Hobbyprojekt</h2>
					<p>
						Jag och min dotter älskar att hitta på skämtvideos
						tillsammans – ett sätt för oss att både ha kul och
						sprida glädje! Med humor, lekfullhet och lite tokigheter
						delar vi små stunder som får både oss och andra att
						skratta. Det är vår grej, vår kvalitetstid och vårt sätt
						att göra världen lite gladare, en video i taget.
					</p>
					<section className='hobby-projects__items-box'>
						{hobbyProjects.map((h, index) => {
							return <HobbyProjects url={h} key={index} />;
						})}
					</section>
				</section>
				<hr />
				<section ref={contactRef} id='contact' className='section__box'>
					<h2 className='section__title'>KONTAKT</h2>
					<Contact />
				</section>
			</main>
		</div>
	);
}

export default HomePage;
