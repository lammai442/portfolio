import { useState } from 'react';
import './HamburgerMenu.css';
import NavItem from '../NavItem/NavItem';
import { navItems } from '../../data/data.js';
import { useEffect } from 'react';

function HamburgerMenu({ scrollToSection }) {
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		if (openMenu) {
			// Förhindra scrollning
			document.body.style.overflow = 'hidden';
		} else {
			// Återställ scrollning
			document.body.style.overflow = 'auto';
		}

		// Återställ vid unmount
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [openMenu]);

	return (
		<>
			{openMenu && (
				<nav className='hamburger__nav'>
					<ul className='nav__list'>
						{navItems.map((n, index) => {
							return (
								<NavItem
									key={index}
									onClick={scrollToSection}
									text={n.text}
									ref={n.ref}
									setOpenMenu={setOpenMenu}
								/>
							);
						})}
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
