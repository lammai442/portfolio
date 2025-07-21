import { iframe, section } from 'framer-motion/client';
import './HobbyProjects.css';
import { useState } from 'react';

function HobbyProjects({ url, index }) {
	const [openModal, setOpenModal] = useState(false);

	const handleClick = () => {
		console.log('click');

		setOpenModal(true);
	};

	return (
		<section key={index} className=''>
			<iframe
				src={url}
				frameborder='0'
				className='iframe'
				onClick={handleClick}></iframe>
			{openModal && (
				<iframe
					src={url}
					frameborder='0'
					className='iframe-modal'></iframe>
			)}
		</section>
	);
}
export default HobbyProjects;
