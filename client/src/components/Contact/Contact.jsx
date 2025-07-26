import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function Contact() {
	const [submitForm, setSubmitForm] = useState(null);
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
					name='name-input'
					defaultValue={'Adam'}
					required={true}></input>
				<input
					type='email'
					className='contact__input'
					placeholder='Mail'
					name='email-input'
					defaultValue={'asdad@dsd.se'}
					required={true}></input>
				<textarea
					type='text'
					defaultValue={'hej'}
					className='contact__text-area'
					placeholder='Meddelande'
					name='textarea-input'
					required={true}></textarea>
				<button type='submit' className='contact__btn'>
					Skicka
				</button>
			</label>
		</form>
	);
}

export default Contact;
