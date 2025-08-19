import './ChatBot.css';
import { useState, useEffect, useRef } from 'react';
import {
	mobileProjects,
	webProjects,
	TimeLineData,
	hobbyProjects,
} from '../../data/data.js';
import { OpenAI } from 'openai/client.js';
import { RiRobot3Line } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import RobotIcon from '../RobotIcon/RobotIcon.jsx';

const openai = new OpenAI({
	apiKey: import.meta.env.VITE_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

const portfolioText = `
Mobile Projects: ${mobileProjects
	.map((p) => `${p.title}: ${p.desc}`)
	.join('\n')}
Web Projects: ${webProjects.map((p) => `${p.title}: ${p.desc}`).join('\n')}
Timeline: ${TimeLineData.map(
	(t) => `${t.title} (${t.date}): ${t.content}`
).join('\n')}
Hobby Projects: ${hobbyProjects.map((h) => h.desc).join('\n')}
Personal info: name: Lam Mai, born: 1987, mail: lam.mai442@gmail.com, telephone: 0735594082`;

function ChatBot() {
	const [ChatIsOpen, setChatIsOpen] = useState(false);
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const [loadingAiMsg, setLoadingAiMsg] = useState(false);
	const lastMessageRef = useRef(null);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') handleSend();
	};

	const handleSend = async () => {
		if (!input) return;

		const currentTime = new Date().toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
		});

		setInput('');
		const userMessage = { role: 'user', text: input, time: currentTime };
		setMessages([...messages, userMessage]);

		setLoadingAiMsg(true);
		const response = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [
				{
					role: 'system',
					content:
						'Du får addera 2 år till din data. Du är en AI som endast svarar utifrån denna portfolio: ',
				},
				{ role: 'system', content: portfolioText },
				{ role: 'user', content: input },
			],
		});

		const aiMessage = {
			role: 'ai',
			text: response.choices[0].message.content,
			time: new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			}),
		};

		setLoadingAiMsg(false);
		setMessages([...messages, userMessage, aiMessage]);
	};

	// Ref so that it autoscrools to the last msg
	useEffect(() => {
		if (lastMessageRef.current) {
			lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [messages]);

	return (
		<>
			<RobotIcon />
			<button
				onClick={() => setChatIsOpen((prev) => !prev)}
				className='chatbox__icon-btn'
				aria-label='Ai chat button'>
				{ChatIsOpen ? (
					<p className='chatbox__icon'>X</p>
				) : (
					<>
						{/* <img src={robotIcon} alt='' className='chatbox__icon' /> */}
						{/* <RiRobot3Line className='chatbox__icon' /> */}
						<RobotIcon />
					</>
				)}
			</button>
			{ChatIsOpen && (
				<div className='chatbot__wrapper'>
					<div className='chatbot__header'>
						<RiRobot3Line className='chatbot__header-icon' />
						<h2 className='chatbot__header-title'>AI - Chat</h2>
						<button
							onClick={() => setChatIsOpen((prev) => !prev)}
							className='chatbox__minimize-btn'>
							<span className='chatbox__minimize-line'></span>
						</button>
					</div>
					<section className='chatbot__main'>
						{messages.length > 0 && (
							<section className='chatbot__message-box'>
								{messages.map((m, i) => (
									<section className='chatbot__message-item'>
										<p
											key={i}
											className={
												m.role === 'ai'
													? 'chatbot__message chatbot__message--ai'
													: 'chatbot__message chatbot__message--user'
											}
											ref={
												i === messages.length - 1
													? lastMessageRef
													: null
											}>
											{m.text}
										</p>
										<section
											className={`
												chatbot__profile-box ${
													m.role === 'ai'
														? ' chatbot__profile--ai'
														: 'chatbot__profile--user'
												}
												`}>
											<span className='chatbot__profile-time'>
												{m.time}
											</span>
											<span>-</span>
											<span
												className={
													m.role === 'ai'
														? 'chatbot__profile--ai'
														: 'chatbot__profile--user'
												}>
												{m.role === 'ai' ? (
													<>
														<RiRobot3Line />
													</>
												) : (
													<>
														<FaUser />
													</>
												)}
											</span>
										</section>
									</section>
								))}

								{loadingAiMsg && (
									<section className='chatbot__message-item'>
										<div className='typing-dots'>
											<span></span>
											<span></span>
											<span></span>
										</div>
										<p className='chatbot__profile--ai'>
											<RiRobot3Line />
										</p>
									</section>
								)}
							</section>
						)}
						<section className='chatbot__bottom'>
							<input
								type='text'
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder='Ställ gärna en fråga om min portfolio...'
								className='chatbot__input-box'
								onKeyDown={handleKeyDown}
							/>
							<button
								onClick={handleSend}
								className='chatbot__btn'>
								Skicka
							</button>
						</section>
					</section>
				</div>
			)}
		</>
	);
}

export default ChatBot;
