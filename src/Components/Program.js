import React from 'react';
import { Avatar } from 'antd';
import './Intro.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Montserrat.css';
import Footer from './Footer';
import shadee from '../assets/shadee.jpg';
import sisteryusra from '../assets/sisteryusra.jpg';
import majed from '../assets/majed.jpg';
import shinawy from '../assets/shinawy.jpg';
import anj from '../assets/ANJ.png';
import kaiser from '../assets/kaiser.jpg';

import ismael from '../assets/ismael.jpg';

import qa from '../assets/QA.jpg';

import salah from '../assets/salah.jpg';
import presentation from '../assets/presentation.jpg';
import quran from '../assets/Quran.jpg';
import registration from '../assets/registration.png';
import conclusion from '../assets/conclusion.jpg';
import waleed from '../assets/waleed.png';
import dunia from '../assets/dunia.jpg';
import muftiSY from '../assets/muftiSY.jpg';
import SuleimanHani from '../assets/SuleimanHani.jpg';



const images = [
	registration,
	quran,
	kaiser,
	SuleimanHani,
	salah,
	majed,
	presentation,
	dunia,
	waleed,
	salah,
	muftiSY,
	salah,
	qa,
	conclusion,
	salah,
	
];

const times = [
	'10:20am to 11:20am',
	'11:20am to 11:25am',
	'11:30am to 11:45am',
	'11:50am to 12:35pm',
	'12:40pm to 12:55pm',
	'1:00pm to 1:45pm',
	'1:50pm to 2:00pm',
	'2:05pm to 2:50pm',
	'2:55pm to 3:40pm',
	'3:45pm to 5:15pm',
	'5:20pm to 6:05pm',
	'6:10pm to 6:30pm',
	'6:35pm to 7:05pm',
	'7:10pm to 7:20pm',
	'7:35pm'

];

const events = [
	'Sign In',
	'Quran Recitation',
	'Introduction to Road To Revival 2022',
	'The Essence of Introspection & Accountability',
	'Dhuhr Salah & Short Break',
	'A Timeless Simulation: Navigating the Digital Era',
	'Helping Hand Presentation',
	'The Prophetic Paradigm of Company',
	'Two Worlds Collide: Balancing the Dunya & Akhirah',
	'Asr Salah & Lunch Break',
	'Plugging into the Akhirah: Resurrected',
	'Maghrib Salah & Short Break',
	'Q&A',
	'Closing Remarks',
	'Isha Salah'
	
];

const speakers = [
	'',
	'',
	'Chaplain Kaiser Aslam',
	'Imam Suleiman Hani',
	'',
	'Ustadh Majed Mahmoud',
	'',
	'Ustadha Dunia Suhaib',
	'Sheykh Waleed Basyouni',
	'',
	'Mufti Sulaiman Yusufi',
	'',
	'With Mufti Sulaiman Yusufi',
	'',
	'',
	'',
	''
];

class Program extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		//

		return (
			<div>
				<div className="container" style={{ height: 250 }}>
					<img id="gif" alt="example" src={require('../assets/northernlights.gif')} />
					<div
						className="program"
						style={{ top: '50%', left: '50%', fontWeight: 900, fontSize: 72, color: 'white' }}
					>
						Program
					</div>
				</div>
				<div className="container">
					<div className="container">
						<VerticalTimeline layout="1-column">
							{times.map((time, i) => {
								const event = events[i];
								const speaker = speakers[i];
								const image = images[i];
								let left = -(this.state.width / 10);
								let size = 0;
								if (this.state.width >= 1476) {
									left = -(this.state.width / 10);
									size = 150;
								} else if (this.state.width >= 1270) {
									left = -50;
									size = 100;
								} else if (this.state.width >= 1000) {
									left = -30;
									size = 80;
								} else if (this.state.width >= 700) {
									left = -12;
									size = 70;
								} else if (this.state.width >= 500) {
									left = -12;
									size = 70;
								} else {
									left = -7;
									size = 60;
								}
								return (
									<VerticalTimelineElement
										className="vertical-timeline-element--work"
										contentStyle={{ background: 'white', color: 'black' }}
										contentArrowStyle={{ borderRight: '7px solid  black' }}
										date={time}
										icon={<Avatar size={size} src={image} />}
										iconStyle={{
											background: 'white',
											left: left
										}}
									>
										<h2 style={{ fontSize: '26px', fontWeight: 'bold' }}>{event}</h2>
										<p>{speaker}</p>
									</VerticalTimelineElement>
								);
							})}
						</VerticalTimeline>
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default Program;
