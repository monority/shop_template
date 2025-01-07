import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ProductById } from '../../queries/ProductFetch';
import { reviews } from '../../temp/Reviews';
import ReviewsTemplate from '../../components/global/ReviewsTemplate';
import { calculateDate } from '../../components/global/calculateDate';
import { renderStars } from '../../components/global/Stars';

const ProductDetails = () => {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [variantSize, setVariantSize] = useState([]);
	const [stockSize, setStockSize] = useState([]);
	const [active_size, setActive_size] = useState(null);
	const [active_color, setActive_color] = useState([0]);
	const [active_tab, setActive_tab] = useState(null);
	const arrayDetails = ["Reviews", "Details", "Discussion"];
	const [average, setAverage] = useState([]);
	const set = [...new Set(data?.data?.color.split('/'))].join('/');
	const [colors, setColors] = useState([]);

	useEffect(() => {
		ProductById(setData, id);
	}, [id]);

	useEffect(() => {
		if (data && data.data && data?.data?.variants) {
			setVariantSize(data?.data?.variants);
			const sizes = data?.data?.variants.map(variant => variant.size);
			setStockSize(sizes);
			// console.log(stockSize)
		}
	}, [data]);

	const filter_stock = stockSize?.sort((a, b) => a - b);
	const filteredReviews = reviews.filter((review) =>
		review.rating.some((rating) => rating?.ref === data?.data?.sku)
	);

	const reviews_display = filteredReviews?.map((review) => {
		const matchingRating = review.rating.find((rate) => rate.ref === data?.data?.sku);

		return (
		  <ReviewsTemplate
			key={review.id}
			id={review.id}
			message={review.message}
			name={review.name}
			date={calculateDate(review?.date)}
			mark={renderStars(matchingRating?.mark)} 
			gender={review?.gender}
		  />
		);
	  });

	
	return (
		<>
			<div id="product_details">
				<div className="lyt_container">
					<div className="container">
						<div className="wrapper_path">
							<p>{data?.data?.category} {">"} {data?.data?.brand}</p>
						</div>
						<div className="container_content">
							<div className="container_left">
								<img src={data?.data?.image} alt="" className='img_product'/>
							</div>
							<div className="container_right">
								<div className="element_between">
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
									<h1>{data?.data?.avg_price?.toFixed(2)} $</h1>
								</div>
								<div className="element_list">
									<>
										{set.split('/').map((color, index) => (
											<p key={index} className={`${active_color === color ? 'active_color' : ''}  default_color`}
												onClick={() => setActive_color(color)}>{color}</p>
										))}
									</>
								</div>
								<div className="element">
									<p>Size <strong>EU Men</strong></p>
								</div>
								<div className="element_list">
									<>

										{filter_stock?.map((item, index) => (
											<p key={index} className={`${active_size === item ? 'active_size' : ''} default_size`}
												onClick={() => setActive_size(item)}>{item}</p>
										))}

									</>
								</div>
								<div className="element">
									<p>Size Guide</p>
								</div>
								<div className="element_button">
									<button type="submit" className='btn btn_full btn_base'><svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44771 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44771 11 8 11H11V8Z" fill="currentColor" />
										<path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z" fill="currentColor" />
									</svg>Add to Cart</button>
									<button type="submit" className='btn btn_uncolor'><svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									</svg></button>
								</div>
								<div className="element">
									<p>Free delivery over 30$</p>
								</div>
							</div>
						</div>
						<div className="container_content">
							<div className="container_left">
								<div className="container_tab">
									{arrayDetails.map((item, index) => {
										return (
											<p key={index} className={`${active_tab === item ? 'active_tab' : ''} default_tab`}
												onClick={() => setActive_tab(item)}>{item}</p>

										)
									})}
								</div>
								<div className="container_text_detailed">
									<div className="container_text_detailed">
										{active_tab === "Reviews" && reviews_display}
									</div>
								</div>

							</div>
							<div className="container_right">
								<div className="wrapper_title">
									<h1>Stars</h1>
								</div>
								<div className="element_between">
									<div className="stars">
										{/* {renderStars(average.toFixed(1))} */}
									</div>
									<p>{average}</p>
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