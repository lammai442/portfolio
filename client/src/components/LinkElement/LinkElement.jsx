import './LinkElement.css';
function LinkButton({ webUrl, text, linkStyle, handleWiggle }) {
	return (
		<a
			href={webUrl}
			target='_blank'
			className={linkStyle}
			aria-label='Link to webpage'>
			{text}
			{...handleWiggle ? { onClick: handleWiggle(true) } : {}}
		</a>
	);
}

export default LinkButton;
