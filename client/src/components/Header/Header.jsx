import { NavLink } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<h1 className='header__name'>Lam Mai</h1>
			<nav className='nav'>
				<ul className='nav__list'>
					<NavLink to='/' className='links'>
						<NavItem text={'Om mig'} />
					</NavLink>
					<NavLink to='/exercises' className='links'>
						<NavItem text={'Projekt'} />
					</NavLink>
					<NavLink to='/exercises' className='links'>
						<NavItem text={'Kontakt'} />
					</NavLink>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
