import Header from '../../components/Header/Header';
import profileimg from '../../assets/croped-profile.png';
import './HomePage.css';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function HomePage() {
	return (
		<div className='pages'>
			<Header />
			<main>
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
			</main>
		</div>
	);
}

export default HomePage;
