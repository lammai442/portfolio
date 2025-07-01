import './Contact.css';
function Contact() {
	return (
		<form action=''>
			<label htmlFor='' className='contact__box'>
				If you'd like to get in touch, send me a message using the form
				below and we'll take it from there!
				<input
					className='contact__input'
					placeholder='Ditt namn'></input>
			</label>
		</form>
	);
}

export default Contact;
