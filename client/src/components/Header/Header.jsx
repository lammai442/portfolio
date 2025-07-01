import { NavLink } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';
function Header({ scrollToSection }) {
	const navigate = useNavigate();
	const location = useLocation();

	// const handleClick = (text) => {
	// 	if (location.pathname === '/') {
	// 		// Om vi redan är på startsidan, byt bara hash
	// 		window.location.hash = `#${text.toLowerCase()}`;
	// 	} else {
	// 		// Navigera till startsidan med hash
	// 		navigate(`#${text.toLowerCase()}`);
	// 	}
	// };

	return (
		<header className='header'>
			<h1 className='header__name'>Lam Mai</h1>
			<nav className='nav'>
				<ul className='nav__list'>
					<NavItem
						onClick={scrollToSection}
						text={'Om mig'}
						ref={'about'}
					/>
					<NavItem
						onClick={scrollToSection}
						text={'Projekt'}
						ref={'project'}
					/>
					<NavItem
						onClick={scrollToSection}
						text={'Kontakt'}
						ref={'contact'}
					/>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
