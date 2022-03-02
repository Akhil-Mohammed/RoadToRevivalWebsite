import React from 'react';
import { Avatar } from 'antd';
import './About.css';
import shadee from '../assets/shadee.jpg';
import sisteryusra from '../assets/sisteryusra.jpg';
import majed from '../assets/majed.jpg';
import shinawy from '../assets/shinawy.jpg';
import anj from '../assets/ANJ.png';
import kaiser from '../assets/kaiser.jpg';
import SuleimanHani from '../assets/SuleimanHani.jpg';
import waleed from '../assets/waleed.png';
import dunia from '../assets/dunia.jpg';
import muftiSY from '../assets/muftiSY.jpg';


import { bioShadee, bioShinway, bioYoussra, bioMajed, bioJangda, bioKaiser } from '../bios';

import './Montserrat.css';

class About extends React.Component {
	render() {
		return (
			<div>
				<Avatar size={150} src={majed} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Ustadh Majed Mahmoud</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Al-Maghrib Institute Instructor</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioMajed}
				</div>
				<Avatar size={150} src={muftiSY} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Mufti Sulaiman Yusufi</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Scholar in Residence at Islamic Center of Mercer County</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioShadee}
				</div>
				<Avatar size={150} src={waleed} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Shaykh Waleed Basyouni</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Al-Maghrib Insitute Vice President </div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioJangda}
				</div>
				<Avatar size={150} src={kaiser} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Chaplain Kaiser Aslam</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Rutgers University Chaplain</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioKaiser}
				</div>
				<Avatar size={150} src={SuleimanHani} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Imam Suleiman Hani</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Al-Maghrib Insitute Director of Academic Affairs</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioShinway}
				</div>

				<Avatar size={150} src={dunia} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Dunia Shuaib</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Guided Hearts Insitute Director</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioYoussra}
				</div>
			</div>
		);
	}
}

export default About;
