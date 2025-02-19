import React from 'react'
import ProductCard from '../../components/Home/ProductCard'
import { useEffect, useState } from 'react'
import { ProductFetch } from '../../queries/ProductFetch'
import { useNavigate } from 'react-router'
const Trending = ({ data_handle }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	const navigation = (id) => {
		navigate(`product/${id}`, { replace: true })
	}
	useEffect(() => {
		setData(data_handle)
	}, [data_handle])
	const exclude_word = ["Slide"]; // * EXCLUDE SLIDE SNEAKERS
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
				colors={[...new Set(sneaker.color.split('/'))].join('/')}
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
					<div>
						<div className="wrapper">
							<h2 className='text_center font_family_Geist'>Trending</h2>
						</div>
						<div className="container flex_wrap">
							{display_sneakers}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Trending