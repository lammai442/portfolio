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
		<section
			key={index}
			className='hobby-projects__box'
			onClick={handleClick}>
			<iframe src={url} className='iframe' allowFullScreen></iframe>
			{openModal && <iframe src={url} className='iframe-modal'></iframe>}
		</section>
	);
}
export default HobbyProjects;
