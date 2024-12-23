import React from 'react'
import { useLocation } from 'react-router';
import Trending from './Trending';

const Hero = ({ video, img , text_title, title  }) => {
	const location = useLocation();
	const checklocation = location.pathname === "";
	video = "/video/hero.webm"
	img = "/hero.png"
	title = "Trendy shoes of luxury"
	text_title = "You will find all the sneakers trending now, available in a limited time. We gathering our product from famous brands and independant creators."
	return (
		<>
				<section id="hero">
					<div className="container">
						{/* <div className="video_container">
						<div className="video_figure">
							<video src={video} autoPlay loop muted></video>
						</div>
					</div> */}
						<div className="content_container">
							<div className="container_gap">
								<div className="element_text">
									<h1 className='font_family_lato'>{title}</h1>

								</div>
								<div className="element_text">
									<p>{text_title}</p>
								</div>
								<div className="element_btn">
									<button className='btn btn_base'>Browse Collections</button>
									<button className='btn btn_base_highlight'>Products on sale</button>
								</div>
							</div>
							<div className="wrapper_img">
								<div className="container_img">
									<div className="figure_img">
										<img src={img} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
		</>
	)
}

export default Hero