import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Contact() {
	// Fadeing effect
	useEffect(() => {
		AOS.init({
			duration: 1500,
			easing: 'ease-in-out-sine',
			once: true,
		});
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('handleSubmit');
	};

	return (
		<form className='form__box' data-aos='fade-up' onSubmit={handleSubmit}>
			<label className='contact__box'>
				<p className='contact__paragraph'>
					Är du nyfiken på vad jag kan bidra med i ert team? Skicka
					gärna ett meddelande via formuläret nedan – jag ser fram
					emot att höra mer om er!
				</p>
				<input
					type='text'
					className='contact__input'
					placeholder='Namn'
					required={true}></input>
				<input
					type='email'
					className='contact__input'
					placeholder='Mail'
					required={true}></input>
				<textarea
					type='text'
					className='contact__text-area'
					placeholder='Meddelande'
					required={true}></textarea>
				<button type='submit' className='contact__btn'>
					Skicka
				</button>
			</label>
		</form>
	);
}

export default Contact;
