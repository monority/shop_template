import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ProductById } from '../../queries/ProductFetch';
const ProductDetails = () => {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [variantSize, setVariantSize] = useState([]);
	const [stockSize, setStockSize] = useState([]);
  
	useEffect(() => {
	  ProductById(setData, id);
	}, [id]);
  
	useEffect(() => {
	  if (data && data.data && data.data.variants) {
		setVariantSize(data.data.variants);
		const sizes = data.data.variants.map(variant => variant.size);
		setStockSize(sizes);
		console.log(stockSize)
	  }
	}, [data]);
  
	
	return (
		<>
			<div id="product_details">
				<div className="lyt_container">
					<div className="container">
						<div className="wrapper_path">
							<p>{data?.data?.category} {">"} {data?.data?.brand}</p>
						</div>
						<div className="container_content">
							<div className="wrapper_image">
								<img src={data?.data?.image} alt="" />
							</div>
							<div className="container_text w_100">
								<div className="element_between w_100">
									<p>{data?.data?.brand}</p>
									<p className='text_color04'>{data?.data?.sku}</p>
								</div>
								<div className="element">
									<h3>{data?.data?.title}</h3>
								</div>
								<div className="element">
									<p>Reviews : </p>
								</div>
								<div className="element">
									<h1>{data?.data?.avg_price} $</h1>
								</div>
								<div className="element_list">
									<>
										{data?.data?.color?.split('/').map((color, index) => (
										<p key={index} className={`${!index ? "active" : ""} default_btn`}>{color}</p>
										))}	
									</>
								</div>
								<div className="element_list">
									<>
										{stockSize.sort()}
									</>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default ProductDetails