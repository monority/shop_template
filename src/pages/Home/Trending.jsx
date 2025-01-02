import React from 'react'
import { data } from '../../temp/STrending'
import ProductCard from '../../components/Home/ProductCard'
const Trending = ({ img_trend00, img_trend01, img_trend02 }) => {
	img_trend00 = "img/img_trending/trending.png"
	img_trend01 = "img/img_trending/trending01.png"
	img_trend02 = "img/img_trending/trending02.png"
	const trendingSneakers = data.filter(sneaker => sneaker.isTrending);
	const display_sneakers = trendingSneakers.map(sneaker => {
		return (
			<ProductCard
				key={sneaker.id}
				id={sneaker.id}
				title={sneaker.title}
				text={sneaker.text}
				img={sneaker.img}
				price={sneaker.price}
				stars={sneaker.stars}
			/>)
	})

	return (
		<>
			<section id="trending">
				<div className="container">
					<div className="container_gap">
						<div className="wrapper">
							<h2 className='text_center font_family_lato'>Trending</h2>
						</div>
						<div className="wrapper_layout_center flex_wrap">
							{display_sneakers}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Trending