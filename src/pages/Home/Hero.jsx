import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import Trending from './Trending';
import HorizontalScroller from '../../temp/ScrollText';

const Hero = ({ video, img, text_title, title , data_handle}) => {
	const [data,setData] = useState([]);
	useEffect(() => {
		setData(data_handle)
	}, [data_handle]);
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
						<div className="container_column f_basis30 space_between">
							<div className="element">
								<h1 className='font_family_Geist'>{title}</h1>

							</div>
							<div className="element">
								<p>{text_title}</p>
							</div>
							<div className="element_row">
								<button className='btn btn_base'>Collections</button>
								<button className='btn btn_base_highlight'>All Sale</button>
							</div>
						</div>
						<div className="element f_basis70">
							<HorizontalScroller data_handle={data_handle}/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero