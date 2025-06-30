import Header from '../../components/Header/Header';
import profileimg from '../../assets/cv-img-round.png';
import './HomePage.css';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
function HomePage() {
	const location = useLocation();
	const projectRef = useRef(null);

	useEffect(() => {
		if (location.hash === '#project' && projectRef.current) {
			// Fördröjningen säkerställer att DOM är redo
			setTimeout(() => {
				projectRef.current.scrollIntoView({ behavior: 'smooth' });
			}, 100); // 100 ms brukar räcka
		}
	}, [location]);

	return (
		<div className='pages'>
			<Header />
			<main className='main__homepage'>
				<section className='info__box'>
					<img
						src={profileimg}
						alt='Profile image'
						className='info__left-img'
					/>
					<section className='info__right-box'>
						<p className='info__right-top-txt'>Hej, jag är</p>
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
				<section ref={projectRef} id='project' className='project__box'>
					<h2 className='project__title'>PROJEKT</h2>
				</section>
			</main>
		</div>
	);
}

export default HomePage;
