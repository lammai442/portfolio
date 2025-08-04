import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
function DarkMode({ theme }) {
	const toggleTheme = (theme) => {
		document.documentElement.setAttribute('data-theme', theme);
	};

	return (
		<button onClick={() => toggleTheme(theme)}>
			{theme === 'light' ? <MdOutlineDarkMode /> : <MdDarkMode />}
		</button>
	);
}

export default DarkMode;
