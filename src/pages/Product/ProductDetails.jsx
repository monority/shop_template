import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ProductById } from '../../queries/ProductFetch';
const ProductDetails = () => {
	const { id } = useParams();
	const [data, setData] = useState();
	useEffect(() => {
		ProductById(setData, id)
	}, []);
	return (
		<>
			<div id="product_details">
				<div className="lyt_container">
					<div className="container">
						<div className="wrapper">
						
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductDetails