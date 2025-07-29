import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
	const [name, setName] = useState('Adam');
	const [email, setEmail] = useState('asdsad@sad.sa');
	const [textArea, setTextArea] = useState('asdads');
	const [sentMsg, setSentMsg] = useState(false);
	const form = useRef();
	const publicKey = import.meta.env.VITE_PUBLIC_KEY;

	// Fade sentMsging effect
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

		emailjs.sendForm('service_p4tn17r', 'template_8fzves8', form.current, {
			publicKey: publicKey,
		});

		setTimeout(() => {
			setSentMsg((prev) => !prev);
		}, 3000);
	};

	return (
		<form
			ref={form}
			className='form__box'
			data-aos='fade-up'
			onSubmit={handleSubmit}>
			<label className='contact__box'>
				<p className='contact__paragraph'>
					Är du nyfiken på vad jag kan bidra med i ert team? {'\n'}
					Skicka gärna ett meddelande via formuläret nedan – jag ser
					fram emot att höra mer om er!
				</p>
				<input
					type='text'
					className='contact__input'
					placeholder='Namn'
					value={name}
					required={true}
					name='name'
					onChange={(e) => setName(e.target.value)}></input>
				<input
					type='email'
					className='contact__input'
					placeholder='Mail'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required={true}
					name='email'></input>
				<textarea
					type='text'
					className='contact__text-area'
					placeholder='Meddelande'
					onChange={(e) => setTextArea(e.target.value)}
					value={textArea}
					required={true}
					name='message'></textarea>
				<button type='submit' className='contact__btn'>
					Skicka
				</button>
			</label>
			{sentMsg && (
				<div
					className='sent-msg__box'
					onClick={() => setSentMsg((prev) => !prev)}>
					<p className='sent-msg__text'>
						Oh vad kul med mail.{'\n'}Jag kommer svara dig så fort
						jag kan!
					</p>
				</div>
			)}
		</form>
	);
}

export default Contact;
