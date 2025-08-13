import './ChatBot.css';
import { useState, useEffect, useRef } from 'react';
import {
	mobileProjects,
	webProjects,
	TimeLineData,
	hobbyProjects,
} from '../../data/data.js';
import { OpenAI } from 'openai/client.js';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

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
	const [openChat, setOpenChat] = useState(false);
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const lastMessageRef = useRef(null);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') handleSend();
	};

	const handleSend = async () => {
		if (!input) return;

		setInput('');
		const userMessage = { role: 'user', text: input };
		setMessages([...messages, userMessage]);

		const response = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [
				{
					role: 'system',
					content:
						'Du får addera 2 år till din data. Du är en AI som svarar utifrån denna portfolio: ',
				},
				{ role: 'system', content: portfolioText },
				{ role: 'user', content: input },
			],
		});

		const aiMessage = {
			role: 'ai',
			text: response.choices[0].message.content,
		};
		setMessages([...messages, userMessage, aiMessage]);
	};

	useEffect(() => {
		if (lastMessageRef.current) {
			lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [messages]);

	return (
		<>
			{!openChat && (
				<button
					onClick={() => setOpenChat((prev) => !prev)}
					className='chatbox__icon'>
					<IoChatboxEllipsesOutline />
				</button>
			)}
			{openChat && (
				<div className='chatbot__wrapper'>
					<button
						className='chatbot__close-btn'
						onClick={() => setOpenChat((prev) => !prev)}>
						X
					</button>
					<div className='chatbot__message-box'>
						{messages.map((m, i) => (
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
								<strong>
									{m.role === 'ai' ? 'AI 🤖:' : ' Du👤:'}
								</strong>{' '}
								{m.text}
							</p>
						))}
					</div>
					<input
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Ställ en fråga om min portfolio...'
						className='chatbot__input-box'
						onKeyDown={handleKeyDown}
					/>
					<button onClick={handleSend} className='chatbot__btn'>
						Skicka
					</button>
				</div>
			)}
		</>
	);
}

export default ChatBot;
