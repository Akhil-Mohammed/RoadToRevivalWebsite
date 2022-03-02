import React from 'react';
import { Button } from 'antd';
import './Intro.css';
import './Montserrat.css';
import Footer from './Footer';
import About from './About';
import { Link } from 'react-router-dom';

class Intro extends React.Component {
	state = { visible: false };

	showSummer = () => {
		this.setState({
			visible: true
		});
	};

	handleSummerOk = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};

	handleSummerCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};

	render() {
		//

		return (
			<div>
				<div className="container" style={{ width: '100%', height: 600 }}>
					<img id="gif" alt="example" src={require('../assets/Flyer2022.jpeg')} />
				</div>
				<div className="container" style={{ width: '100%', height: 300 }}>
					<img
						id="gif"
						alt="example"
						src={
							'https://lh3.googleusercontent.com/4RpFJJuyLRvkKbNAFju8VGnmZQpvEKxpFmjOTYqIlyWPQmfEParSeko6RE0ddcXu-UV18Uh2SKzk_y_gK6qKln3fVMz2dlWkWmI=h600'
						}
					/>
					<div id="opacity1" style={{ width: '100%', height: '100%', backgroundColor: '#00000050' }} />

					<div
						className="program"
						style={{ top: '20%', left: '50%', fontWeight: 900, fontSize: 32, color: 'white' }}
					>
						Purchase a Ticket
					</div>
					<div className="program" style={{ top: '45%', left: '50%', width: 200 }}>
						<Button type="primary" size="large" block>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSehx1WKFAt9qm3fJ6s6fExSWDX0HjueFnc6y2PKIIk-eIzs2g/viewform"
								target="_blank"
								rel="noopener noreferrer"
							>
								Click Here to Register
							</a>
						</Button>
					</div>

					<div className="program" style={{ top: '70%', left: '50%', width: 200 }}>
						<Button type="primary" size="large" block>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSd-4qgUM54q-gIhP3kxyOVRifyFp2LjACCSImrI7ZyFEr1rkQ/viewform"
								target="_blank"
								rel="noopener noreferrer"
							>
								Volunteer Form
							</a>
						</Button>
					</div>
				</div>

				<div className="container">
					<About />
				</div>

				<Footer />
			</div>
		);
	}
}

export default Intro;
