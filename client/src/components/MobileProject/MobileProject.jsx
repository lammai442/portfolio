import './MobileProject.css';
function MobileProject({ url }) {
	return (
		<div className='mobile-box'>
			<div className='mobile-frame'>
				<iframe
					src={url}
					title='Mobilapp'
					className='mobile-iframe'></iframe>
			</div>
		</div>
	);
}

export default MobileProject;
