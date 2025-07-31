function DarkMode() {
	const toggleTheme = () => {
		const current = document.documentElement.getAttribute('data-theme');
		const nextTheme = current === 'dark' ? 'light' : 'dark';
		console.log(nextTheme);

		document.documentElement.setAttribute('data-theme', nextTheme);
	};

	return <button onClick={toggleTheme}>Byt tema</button>;
}

export default DarkMode;
