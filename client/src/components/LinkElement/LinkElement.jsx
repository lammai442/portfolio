import './LinkElement.css';
function LinkButton({ webUrl, text, linkStyle }) {
	return (
		<a
			href={webUrl}
			target='_blank'
			className={linkStyle}
			aria-label='Link to webpage'>
			{text}
		</a>
	);
}

export default LinkButton;
