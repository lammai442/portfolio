import { useState } from 'react';
import './HamburgerMenu.css';
import NavItem from '../NavItem/NavItem';

function HamburgerMenu({ scrollToSection }) {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			{openMenu && (
				<nav className='hamburger__nav'>
					<ul className='nav__list'>
						<NavItem
							onClick={scrollToSection}
							text={'Projekt'}
							ref={'project'}
							setOpenMenu={setOpenMenu}
						/>
						<NavItem
							onClick={scrollToSection}
							text={'Erfarenheter'}
							ref={'experience'}
							setOpenMenu={setOpenMenu}
						/>
						<NavItem
							onClick={scrollToSection}
							text={'Hobbyprojekt'}
							ref={'hobbieproject'}
							setOpenMenu={setOpenMenu}
						/>
						<NavItem
							onClick={scrollToSection}
							text={'Kontakt'}
							ref={'contact'}
							setOpenMenu={setOpenMenu}
						/>
					</ul>
				</nav>
			)}
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
		</>
	);
}

export default HamburgerMenu;
