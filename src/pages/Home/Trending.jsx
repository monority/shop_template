import React from 'react'
import { data } from '../../temp/STrending'
import SneakerCard from '../../components/Home/SneakerCard'
const Trending = ({ img_trend00, img_trend01, img_trend02 }) => {
	img_trend00 = "img/img_trending/trending.png"
	img_trend01 = "img/img_trending/trending01.png"
	img_trend02 = "img/img_trending/trending02.png"

	const display_sneakers = data.map(sneaker => {
		<SneakerCard
			id={sneaker.id}
			title={sneaker.title}
			text={sneaker.text}
			img={sneaker.img}
			price={sneaker.price}
			stars={sneaker.stars}

		/>
	})

	return (
		<>
			<section id="trending">
				<div className="container">
					<div className="container_gap">
						<div className="wrapper">
							<h2 className='text_center font_family_lato'>Trending</h2>
						</div>
						<div className="wrapper_layout">
							{/* <div className="element_trending">
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
							</div> */}
							{display_sneakers}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Trending