import './TimeLine.css';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLineData } from '../../data/data.js';
import { useEffect, useState } from 'react';

function TimeLine({ scrollToSection }) {
	const [visible, setVisible] = useState(3);
	const [minimize, setminimize] = useState(false);

	const handleShowMore = () => {
		if (visible < TimeLineData.length) {
			setVisible((prev) => prev + 3);
		} else {
			setVisible(3);
			setminimize(false);
			scrollToSection('experience');
		}
	};

	useEffect(() => {
		if (visible > TimeLineData.length) setminimize(true);
	}, [visible]);

	return (
		<div className='timeline__box'>
			<VerticalTimeline lineColor='#787878'>
				{TimeLineData &&
					TimeLineData.slice(0, visible).map((t, index) => {
						const IconComponent = t.icon;
						return (
							<VerticalTimelineElement
								key={t.id}
								date={t.date}
								icon={<IconComponent />}
								iconStyle={t.iconStyle}>
								<h2 className='vertical-timeline-element-title'>
									{t.title}
								</h2>
								<h3 className='vertical-timeline-element-subtitle'>
									{t.subtitle}
								</h3>
								<p className='timeline__content'>{t.content}</p>
							</VerticalTimelineElement>
						);
					})}
			</VerticalTimeline>
			<button
				onClick={handleShowMore}
				className={
					minimize
						? 'timeline__btn timeline__btn--minimize'
						: 'timeline__btn'
				}>
				{minimize ? 'Minimera' : 'Visa fler'}
			</button>
		</div>
	);
}

export default TimeLine;
