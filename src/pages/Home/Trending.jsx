import React from 'react'

const Trending = ({ img_trend00, img_trend01,img_trend02 }) => {
	img_trend00 = "img/img_trending/trending.png"
	img_trend01 = "img/img_trending/trending01.png"
	img_trend02 = "img/img_trending/trending02.png"
	
	return (
		<>
			<section id="trending">
				<div className="container">
					<div className="container_gap">
						<div className="wrapper">
							<h2 className='text_center font_family_lato'>Trending</h2>
						</div>
						<div className="wrapper_layout">
							<div className="element_trending">
								<div className="figure_img_base">
									<img src={img_trend00} alt="" />
								</div>
							</div>
							<div className="element_trending">
								<div className="figure_img_base">
									<img src={img_trend01} alt="" />
								</div>
							</div>
							<div className="element_trending">
								<div className="figure_img_base">
									<img src={img_trend02} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Trending