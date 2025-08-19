import { motion } from 'framer-motion';
import './RobotIcon.css';

function RobotIcon() {
	return (
		<motion.svg
			viewBox='0 0 270 270'
			xmlns='http://www.w3.org/2000/svg'
			className='robot-icon'>
			<g id='ri:robot-3-line'>
				{/* The body */}
				<motion.path
					d='M123.75 11.25V22.5H78.75C69.7989 22.5 61.2145 26.0558 54.8851 32.3851C48.5558 38.7145 45 47.2989 45 56.25V90C45 104.918 50.9263 119.226 61.4752 129.775C72.0242 140.324 86.3316 146.25 101.25 146.25H168.75C183.668 146.25 197.976 140.324 208.525 129.775C219.074 119.226 225 104.918 225 90V56.25C225 47.2989 221.444 38.7145 215.115 32.3851C208.786 26.0558 200.201 22.5 191.25 22.5H146.25V11.25H123.75ZM67.5 56.25C67.5 53.2663 68.6853 50.4048 70.7951 48.2951C72.9048 46.1853 75.7663 45 78.75 45H191.25C194.234 45 197.095 46.1853 199.205 48.2951C201.315 50.4048 202.5 53.2663 202.5 56.25V90C202.5 98.9511 198.944 107.536 192.615 113.865C186.286 120.194 177.701 123.75 168.75 123.75H101.25C92.2989 123.75 83.7145 120.194 77.3851 113.865C71.0558 107.536 67.5 98.9511 67.5 90V56.25ZM67.5 247.5C67.5 229.598 74.6116 212.429 87.2703 199.77C99.929 187.112 117.098 180 135 180C152.902 180 170.071 187.112 182.73 199.77C195.388 212.429 202.5 229.598 202.5 247.5H225C225 223.631 215.518 200.739 198.64 183.86C181.761 166.982 158.869 157.5 135 157.5C111.131 157.5 88.2387 166.982 71.3604 183.86C54.4821 200.739 45 223.631 45 247.5H67.5Z'
					fill='var(--white-text-color)'
				/>
				{/* The arm */}
				<motion.rect
					x='35'
					y='100'
					width='20'
					height='140'
					fill='var(--white-text-color)'
					animate={{ rotate: [-8, -16, -8] }}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatDelay: 2,
					}}
					style={{ originX: 'center', originY: 'bottom' }}
				/>
				{/* The eyes */}
				<motion.g
					animate={{ scaleY: [1, 0, 1, 0, 1] }}
					transition={{
						duration: 0.6,
						repeat: Infinity,
						repeatDelay: 3,
					}}
					style={{ originY: 'center' }}>
					<circle
						cx='106.875'
						cy='84.375'
						r='16.875'
						fill='var(--white-text-color)'
					/>
					<circle
						cx='163.125'
						cy='84.375'
						r='16.875'
						fill='var(--white-text-color)'
					/>
				</motion.g>
			</g>
		</motion.svg>
	);
}

export default RobotIcon;
