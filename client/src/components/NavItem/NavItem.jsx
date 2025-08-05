import './NavItem.css';

function NavItem({ onClick, text, ref, setOpenMenu }) {
	return (
		<li
			onClick={() => {
				onClick(ref);
				if (setOpenMenu) setOpenMenu(false);
			}}
			className='nav__item'>
			<span className='nav__title'>{text}</span>
		</li>
	);
}

export default NavItem;
