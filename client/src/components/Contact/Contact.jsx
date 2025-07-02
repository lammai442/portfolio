import './Contact.css';
function Contact() {
	return (
		<form className='form__box'>
			<label className='contact__box'>
				<p className='contact__paragraph'>
					If you'd like to get in touch, send me a message using the
					form below and we'll take it from there!
				</p>
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
					className='contact__text-area'
					placeholder='Meddelande'></textarea>
				<button type='submit' className='contact__btn'>
					Skicka
				</button>
			</label>
		</form>
	);
}

export default Contact;
