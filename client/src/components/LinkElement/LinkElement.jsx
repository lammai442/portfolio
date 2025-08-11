import './LinkElement.css';
function LinkButton({ webUrl, text, linkStyle, handleWiggle }) {
	return (
		<a
			href={webUrl}
			target='_blank'
			className={linkStyle}
			aria-label='Link to webpage'
			{...(handleWiggle ? { onClick: () => handleWiggle(true) } : {})}>
			{text}
		</a>
	);
}

export default LinkButton;
