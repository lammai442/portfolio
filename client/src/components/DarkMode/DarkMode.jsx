import { MdOutlineDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { useState } from 'react';
import './DarkMode.css';

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
		<button onClick={() => toggleTheme()} className='theme-btn'>
			{lightThemeOn ? (
				<MdOutlineDarkMode className='theme__dark' />
			) : (
				<CiLight className='theme__light' />
			)}
		</button>
	);
}

export default DarkMode;
