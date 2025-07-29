import './LinkElement.css';
function LinkButton({ webUrl, text, linkStyle }) {
	return (
		<section className='link__box'>
			<a
				href={webUrl}
				target='_blank'
				className={linkStyle}
				aria-label='Link to webpage'>
				{text}
			</a>
		</section>
	);
}

export default LinkButton;
