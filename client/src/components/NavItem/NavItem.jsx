import './NavItem.css';

function NavItem({ onClick, text, ref }) {
	return (
		<li onClick={() => onClick(ref)} className='nav__item'>
			<span className='nav__title'>{text}</span>
		</li>
	);
}

export default NavItem;
