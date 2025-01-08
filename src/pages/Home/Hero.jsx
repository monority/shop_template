import React from 'react'
import { useLocation } from 'react-router';
import Trending from './Trending';

const Hero = ({ video, img, text_title, title }) => {
	const location = useLocation();
	const checklocation = location.pathname === "";
	video = "/video/hero.webm"
	img = "/hero.png"
	title = "Trendy shoes of luxury"
	text_title = "You will find all the sneakers trending now, available in a limited time. We gathering our product from famous brands and independant creators."
	return (
		<>
			<section id="hero">
				<div className="lyt_container">
					<div className="container_default">
						<div className="container_column">
							<div className="element">
								<h1 className='font_family_Geist'>{title}</h1>

							</div>
							<div className="element">
								<p>{text_title}</p>
							</div>
							<div className="element_row">
								<button className='btn btn_base'>Browse Collections</button>
								<button className='btn btn_base_highlight'>Products on sale</button>
							</div>
						</div>
						<div className="element">
							<img src={img} className='image_default' alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero