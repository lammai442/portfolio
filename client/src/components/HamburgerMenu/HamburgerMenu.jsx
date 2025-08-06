import { useState } from 'react';
import './HamburgerMenu.css';
import NavItem from '../NavItem/NavItem';
import { navItems } from '../../data/data.js';

function HamburgerMenu({ scrollToSection }) {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			{openMenu && (
				<nav className='hamburger__nav'>
					<ul className='nav__list'>
						{navItems.map((n, index) => {
							return (
								<>
									<div className='hamburger-nav__wrapper'>
										<NavItem
											key={index}
											onClick={scrollToSection}
											text={n.text}
											ref={n.ref}
											setOpenMenu={setOpenMenu}
										/>
										<hr className='hr' />
									</div>
								</>
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
