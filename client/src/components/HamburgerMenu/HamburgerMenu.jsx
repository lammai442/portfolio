import { useState } from 'react';
import './HamburgerMenu.css';
import NavItem from '../NavItem/NavItem';

function HamburgerMenu({ scrollToSection }) {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			<button
				className='hamburger__btn'
				aria-label='Open nav menu button'
				onClick={() => setOpenMenu((prev) => !prev)}>
				<span
					className={
						openMenu
							? 'hamburger__lines hamburger__lines--active'
							: 'hamburger__lines'
					}></span>
			</button>
			{openMenu && (
				<nav className='nav'>
					<ul className='nav__list'>
						<NavItem
							onClick={scrollToSection}
							text={'Projekt'}
							ref={'project'}
						/>
						<NavItem
							onClick={scrollToSection}
							text={'Erfarenheter'}
							ref={'experience'}
						/>
						<NavItem
							onClick={scrollToSection}
							text={'Hobbyprojekt'}
							ref={'hobbieproject'}
						/>
						<NavItem
							onClick={scrollToSection}
							text={'Kontakt'}
							ref={'contact'}
						/>
					</ul>
				</nav>
			)}
		</>
	);
}

export default HamburgerMenu;
