import './HobbyProjects.css';
import { useState } from 'react';

function HobbyProjects({ url }) {
	const [openModal, setOpenModal] = useState(false);

	const handleClick = () => {
		console.log('click');

		setOpenModal(true);
	};

	return (
		<section className='hobby-projects__box' onClick={handleClick}>
			{openModal && <div>hejs</div>}
			<iframe
				src={url}
				className='iframe'
				allowFullScreen
				onClick={() => handleClick}></iframe>
			{openModal && <iframe src={url} className='iframe-modal'></iframe>}
		</section>
	);
}
export default HobbyProjects;
