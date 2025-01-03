import React from 'react';
import { HalfStar, FullStar, EmptyStar } from '../global/Rating';
const ProductCard = ({ img, title, colors, price, stars, type, link_to, description}) => {

	const renderStars = () => {
		const fullStars = Math.floor(stars);
		const hasHalfStar = stars % 1 !== 0;
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

		return (
			<>
				{Array(fullStars)
					.fill(<FullStar />)
					.map((star, index) => (
						<span key={`full-${index}`} className="star-icon full-star">{star}</span>
					))}
				{hasHalfStar && <span className="star-icon half-star"><HalfStar /></span>}
				{Array(emptyStars)
					.fill(<EmptyStar />)
					.map((star, index) => (
						<span key={`empty-${index}`} className="star-icon empty-star">{star}</span>
					))}
			</>
		);
	};

	return (
		<div className="product">
			<div className="figure_img_base">
				<img src={img} alt={title} />
			</div>
			<div className="figure_caption">
				<div className="element_between">
					<div className="element">
						<h3>{title}</h3>
					</div>
					<div className="element_bg">
						<h4>{type}</h4>
					</div>
				</div>
				<div className="element">
					<p className="text_color04">{colors}</p>
				</div>
				<div className="element">
					<p className="text_color05 break_word">{description}</p>
				</div>
				<div className="element">
					<button type="button" className='btn btn_shop'onClick={link_to}>Shop it</button>
				</div>
				<div className="element">
					<div className="stars"></div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
