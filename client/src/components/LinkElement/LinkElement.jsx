import './LinkElement.css';
function LinkButton({ webUrl, text, linkStyle, handleWiggle, setWiggle }) {
	return (
		<a
			href={webUrl}
			target='_blank'
			className={linkStyle}
			aria-label='Link to webpage'
			{...(handleWiggle ? { onClick: () => handleWiggle(true) } : {})}
			onMouseOver={() => setWiggle(true)}
			onMouseLeave={() => setWiggle(false)}>
			{text}
		</a>
	);
}

export default LinkButton;
