import './HobbyProjects.css';
import { useState } from 'react';

function HobbyProjects({ url }) {
	return (
		<section className='hobby-projects__box'>
			<iframe src={url} className='iframe' allowFullScreen></iframe>
		</section>
	);
}
export default HobbyProjects;
