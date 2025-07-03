import Header from '../../components/Header/Header';
import profileimg from '../../assets/cv-img-round.png';
import './HomePage.css';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { useRef } from 'react';
import Contact from '../../components/Contact/Contact';
import MobileProject from '../../components/MobileProject/MobileProject';
function HomePage() {
	const projectRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);

	const scrollToSection = (section) => {
		if (section === 'about') {
			aboutRef.current.scrollIntoView({ behavior: 'smooth' });
		} else if (section === 'project') {
			projectRef.current.scrollIntoView({ behavior: 'smooth' });
		} else if (section === 'contact') {
			contactRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const url = 'https://lammai442.github.io/yumyum-gimme-sum/';

	return (
		<div className='pages'>
			<Header scrollToSection={scrollToSection} />
			<main className='main__homepage'>
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
						<h2 className='info__right-middle-txt'>Lam Mai</h2>
						<p className='info__right-bottom-txt'>Webbutvecklare</p>
						<section className='info__right-links-box'>
							<a href='http://www.linkedin.com/in/lam-mai'>
								<FaLinkedin className='info__right-links' />
							</a>
							<a href='https://github.com/lammai442/lam-mai'>
								<FaGithubSquare className='info__right-links' />
							</a>
						</section>
					</section>
				</section>
				<hr />
				<section ref={projectRef} id='project' className='section__box'>
					<h2 className='section__title'>PROJEKT</h2>
					<p>hej</p>
					<MobileProject url={url} />
				</section>
				<hr />
				<section ref={aboutRef} id='about' className='section__box'>
					<h2 className='section__title'>OM MIG</h2>
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
