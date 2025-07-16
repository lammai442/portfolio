import './TimeLine.css';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLineData } from '../../data/data.js';

function TimeLine() {
	return (
		<div className='timeline__box'>
			<VerticalTimeline lineColor='#787878'>
				{TimeLineData &&
					TimeLineData.map((t, index) => {
						const IconComponent = t.icon;
						return (
							<>
								<VerticalTimelineElement
									animate={true}
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
									<p className='timeline__content'>
										{t.content}
									</p>
								</VerticalTimelineElement>
							</>
						);
					})}
			</VerticalTimeline>
		</div>
	);
}

export default TimeLine;
