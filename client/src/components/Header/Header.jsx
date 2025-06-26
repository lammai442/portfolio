import { NavLink } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<NavLink to={'/exercises'} className='links'></NavLink>
			<NavBar />
		</header>
	);
}

export default Header;
