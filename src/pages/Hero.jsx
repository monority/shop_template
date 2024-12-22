import React from 'react'
import { useLocation } from 'react-router';

const Hero = ({ video, img }) => {
	const location = useLocation();
	const checklocation = location.pathname === "";
	video = "/video/hero.webm"
	img = "/hero.png"
	return (
		<>
			<div className="lyt_container">
				<section id="hero">
					<div className="container">
						{/* <div className="video_container">
						<div className="video_figure">
							<video src={video} autoPlay loop muted></video>
						</div>
					</div> */}
						<div className="img_container">
							<div className="img_figure">
								<img src={img} alt="" />
							</div>
						</div>
						<div className="content_container">
							<div className="wrapper">
								<h1>We strive to give you the sneaker you looking for</h1>
							</div>
						</div>
					</div>
				</section>
			</div>



		</>
	)
}

export default Hero