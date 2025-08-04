import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import { useState } from 'react';

function DarkMode() {
	const [lightThemeOn, setLightThemeOn] = useState(true);

	const toggleTheme = () => {
		setLightThemeOn((prev) => {
			const newTheme = prev ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', newTheme);
			return !prev;
		});
	};

	return (
		<button onClick={() => toggleTheme()}>
			{lightThemeOn ? <MdOutlineDarkMode /> : <MdDarkMode />}
		</button>
	);
}

export default DarkMode;
