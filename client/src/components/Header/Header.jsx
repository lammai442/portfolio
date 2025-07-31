import DarkMode from '../DarkMode/DarkMode';
import NavItem from '../NavItem/NavItem';
import './Header.css';
function Header({ scrollToSection }) {
	return (
		<header className='header'>
			<DarkMode />
			<h1 className='header__name'>Lam Mai</h1>
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
		</header>
	);
}

export default Header;
