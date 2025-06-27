import './NavItem.css';

function NavItem({ text }) {
	return (
		<li className='nav__item'>
			<p className='nav__title'>{text}</p>
		</li>
	);
}

export default NavItem;
