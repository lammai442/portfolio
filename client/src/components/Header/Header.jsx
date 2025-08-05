import DarkMode from '../DarkMode/DarkMode';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import NavItem from '../NavItem/NavItem';
import './Header.css';
import { navItems } from '../../data/data.js';
function Header({ scrollToSection }) {
	return (
		<header className='header'>
			<div className='spacer'></div>
			<nav className='nav'>
				<ul className='nav__list'>
					{navItems.map((n) => {
						return (
							<NavItem
								onClick={scrollToSection}
								text={n.text}
								ref={n.ref}
							/>
						);
					})}
				</ul>
			</nav>
			<DarkMode className='hej' />
			<HamburgerMenu scrollToSection={scrollToSection} />
		</header>
	);
}

export default Header;
