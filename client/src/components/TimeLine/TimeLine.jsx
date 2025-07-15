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
			<VerticalTimeline layout='2-columns' lineColor='#787878'>
				{TimeLineData &&
					TimeLineData.map((t, index) => {
						const IconComponent = t.icon;
						return (
							<>
								<VerticalTimelineElement
									className='vertical-timeline-element--work'
									// className='timeline__item'
									key={t.id}
									date={`${t.fromDate} - ${t.toDate || ''}`}
									icon={<IconComponent />}
									iconStyle={t.iconStyle}>
									<h2 className='vertical-timeline-element-title'>
										{t.title}
									</h2>
									<h3 className='vertical-timeline-element-subtitle'>
										{t.subtitle}
									</h3>
									<p>{t.content}</p>
								</VerticalTimelineElement>
								<VerticalTimelineElement
									key={t.id}
									icon={<IconComponent />}
									date={`${t.fromDate} - ${t.toDate || ''}`}
									iconStyle={{
										background: 'rgb(33, 150, 243)',
										color: '#fff',
									}}>
									<h2 className='vertical-timeline-element-title'>
										{t.title}
									</h2>
									<h3 className='vertical-timeline-element-subtitle'>
										{t.subtitle}
									</h3>
									<p>{t.content}</p>
								</VerticalTimelineElement>
							</>
						);
					})}
			</VerticalTimeline>
		</div>
	);
}

export default TimeLine;
