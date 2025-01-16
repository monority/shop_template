import React from 'react'
import ProductCard from '../../components/Home/ProductCard'
import { useEffect, useState } from 'react'
import { ProductFetch } from '../../queries/ProductFetch'
import { useNavigate } from 'react-router'
import { data } from '../../temp/STrending'
const Trending = ({ data_handle }) => {
	
	const navigate = useNavigate();
	const navigation = (id) => {
		navigate(`product/${id}`, { replace: true })
	}
	const filter_sneakers = data.slice(0, 8).filter(item => item.isTrending === true);
	const display_sneakers = filter_sneakers.map(sneaker => {
		return (
			<ProductCard
				key={sneaker.id}
				id={sneaker.id}
				title={sneaker.title}
				colors={sneaker.colors}
				description={sneaker.description}
				img={sneaker.image}
				price={sneaker.price}
				stars={sneaker.stars}
				link_to={() => navigation(sneaker.id)}
			/>)
	})

	return (
		<>
			<section id="trending">
				<div className="lyt_container">
					<div className='container_column_small'>
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