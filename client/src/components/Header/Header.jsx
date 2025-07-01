import { NavLink } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';
function Header() {
	const navigate = useNavigate();
	const location = useLocation();

	const handleClick = () => {
		if (location.pathname === '/') {
			// Om vi redan är på startsidan, byt bara hash
			window.location.hash = '#project';
		} else {
			// Navigera till startsidan med hash
			navigate('/#project');
		}
	};

	return (
		<header className='header'>
			<h1 className='header__name'>Lam Mai</h1>
			<nav className='nav'>
				<ul className='nav__list'>
					<NavItem onClick={handleClick} text={'Om mig'} />
					<NavItem onClick={handleClick} text={'Projekt'} />
					<NavItem onClick={handleClick} text={'Kontakt'} />
				</ul>
			</nav>
		</header>
	);
}

export default Header;
