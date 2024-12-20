import React from 'react'
import { useLocation } from 'react-router';

const Hero = ({ video }) => {
	const location = useLocation();
	const checklocation = location.pathname === "";
	video = "/video/hero.webm"
	return (
		<>

				<div id='hero'>
					<div className="container">
						{/* <video src={video} autoPlay loop muted></video> */}
					</div>
				</div>
			

		</>
	)
}

export default Hero