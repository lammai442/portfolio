import './NavItem.css';

function NavItem({ onClick, text, ref }) {
	return (
		<li onClick={() => onClick(ref)} className='nav__item'>
			<p className='nav__title'>{text}</p>
		</li>
	);
}

export default NavItem;
