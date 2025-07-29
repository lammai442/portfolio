import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { p } from 'framer-motion/client';
import { useEffect, useState } from 'react';

function Contact() {
	const [name, setName] = useState('Adam');
	const [email, setEmail] = useState('asdsad@sad.sa');
	const [textArea, setTextArea] = useState('asdads');
	const [sentMsg, setSentMsg] = useState(false);
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

		setName('');
		setEmail('');
		setTextArea('');
		setSentMsg(true);

		setTimeout(() => {
			setSentMsg(false);
		}, 2500);
	};

	return (
		<form
			className={
				{ sentMsg } ? 'form__box form__box--opacity' : 'form__box'
			}
			data-aos='fade-up'
			onSubmit={handleSubmit}>
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
					value={name}
					required={true}
					onChange={(e) => setName(e.target.value)}></input>
				<input
					type='email'
					className='contact__input'
					placeholder='Mail'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required={true}></input>
				<textarea
					type='text'
					className='contact__text-area'
					placeholder='Meddelande'
					onChange={(e) => setTextArea(e.target.value)}
					value={textArea}
					required={true}></textarea>
				<button type='submit' className='contact__btn'>
					Skicka
				</button>
			</label>
			<div className='sent-msg__box'>
				<p className='sent-msg__text'>Tack för din kontakt</p>
			</div>
			{sentMsg && (
				<p className='contact__sent-msg'>Tack för din kontakt</p>
			)}
		</form>
	);
}

export default Contact;
