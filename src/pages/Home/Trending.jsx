import React from 'react'
import ProductCard from '../../components/Home/ProductCard'
import { useEffect, useState } from 'react'
import { ProductFetch } from '../../queries/ProductFetch'
import { useNavigate } from 'react-router'
const Trending = () => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	const navigation = (id) => {
		navigate(`product/${id}`, { replace: true })
	}
	useEffect(() => {
		ProductFetch(setData)
		console.log(data)

	}, [])

	const exclude_word = ["Slide"];

	const filtered_sneakers = data.filter(sneaker =>
		sneaker.gender === "male" && !exclude_word.some(word => sneaker.title.includes(word))
	);



	const display_sneakers = filtered_sneakers.map(sneaker => {
		return (
			<ProductCard
				key={sneaker.id}
				id={sneaker.id}
				title={sneaker.title}
				type={sneaker.metadata.category}
				colors={sneaker.color}
				description={sneaker.description}
				img={sneaker.image}
				price={Math.floor(sneaker.avg_price, 2)}
				stars={sneaker.stars}
				link_to={() => navigation(sneaker.id)}
			/>)
	})

	return (
		<>
			<section id="trending">
				<div className="lyt_container_small">
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
				</div>
			</section>
		</>
	)
}

export default Trending