import './NavItem.css';

function NavItem({ onClick, text }) {
	return (
		<li onClick={onClick} className='nav__item'>
			<p className='nav__title'>{text}</p>
		</li>
	);
}

export default NavItem;
