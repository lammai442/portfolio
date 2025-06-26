import './NavBar.css';
import NavItem from '../NavItem/NavItem';
import { NavLink, useLocation } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
function NavBar() {
	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<NavLink to='/' className='links'>
					<NavItem text={'Hem'} Icon={IoHome} />
				</NavLink>
				<NavLink to='/exercises' className='links'>
					<NavItem text={'Övningar'} Icon={IoHome} />
				</NavLink>
			</ul>
		</nav>
	);
}

export default NavBar;
