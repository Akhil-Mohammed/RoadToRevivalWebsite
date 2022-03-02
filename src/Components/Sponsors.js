import React from 'react';
import { Row, Col, Card, Divider } from 'antd';
import './NavBar.css';
import Footer from './Footer';

import helping from '../assets/helping.png';
import ir from '../assets/IR.jpg';
import maghrib from '../assets/maghrib.png';
import shuhada from '../assets/shuhada.png';
import iscj from '../assets/download.png';
import icmc from '../assets/icmc.png';

class Sponsors extends React.Component {
	render() {
		const cardHeightRow1 = 400;
		const cardHeightRow2 = 400;

		return (
			<div>
				<Col span={24}>
					<div className="container" style={{ height: 250 }}>
						<img id="gif" alt="example" src={require('../assets/aurora.gif')} />
						<div
							className="program"
							style={{ top: '50%', left: '50%', fontWeight: 900, fontSize: 72, color: 'white' }}
						>
							Sponsors
						</div>
					</div>
				</Col>
				<div>
					<Row>
						
						<Col xs={24} sm={12} md={12} lg={8}>
							<Card
								title="Helping Hand"
								extra={
									<a href="https://www.hhrd.org/" target="_blank" rel="noopener noreferrer">
										Website
									</a>
								}
								style={{ margin: 20, height: cardHeightRow1 }}
							>
								<img alt="example" src={helping} style={{ maxWidth: '40%', height: 'auto' }} />
								<Divider dashed>Description</Divider>

								<p>
									HHRD is a global humanitarian relief and development organization responding to
									human sufferings in emergency and disaster situations around the world.
								</p>
							</Card>
						</Col>
						
						<Col xs={24} sm={12} md={12} lg={8}>
							<Card
								title="Islamic Society of Central Jersey"
								extra={
									<a href="https://iscj.org/" target="_blank" rel="noopener noreferrer">
										Website
									</a>
								}
								style={{ margin: 20, height: cardHeightRow2 }}
							>
								<img alt="example" src={iscj} style={{ maxWidth: '40%', height: 'auto' }} />
								<Divider dashed>Description</Divider>

								<p>
									The Islamic Society of Central Jersey (ISCJ) is an organization of Muslim Americans
									that provides religious, educational and social services to its members, as well as
									to the community at large.
								</p>
							</Card>
						</Col>
						
						
					</Row>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Sponsors;
