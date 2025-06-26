import './NavItem.css';

function NavItem({ Icon, text }) {
	return (
		<li className='nav__item'>
			{Icon && <Icon className='nav__icon' />}
			<p className='nav__title'>{text}</p>
		</li>
	);
}

export default NavItem;
