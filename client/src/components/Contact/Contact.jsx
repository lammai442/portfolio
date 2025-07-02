import './Contact.css';
function Contact() {
	return (
		<form action=''>
			<label className='contact__box'>
				If you'd like to get in touch, send me a message using the form
				below and we'll take it from there!
				<input
					type='text'
					className='contact__input'
					placeholder='Namn'></input>
				<input
					type='email'
					className='contact__input'
					placeholder='Mail'></input>
				<textarea
					type='text'
					className='contact__input'
					placeholder='Meddelande'></textarea>
			</label>
			<button type='submit'>Skicka</button>
		</form>
	);
}

export default Contact;
