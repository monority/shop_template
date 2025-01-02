import React from 'react';
import { HalfStar, FullStar, EmptyStar } from '../global/Rating';
const ProductCard = ({ img, title, text, price, stars }) => {

	const renderStars = () => {
		const fullStars = Math.floor(stars);
		const hasHalfStar = stars % 1 !== 0;
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

		return (
			<>
				{Array(fullStars)
					.fill(<FullStar/>)
					.map((star, index) => (
						<span key={`full-${index}`} className="star-icon full-star">{star}</span>
					))}
				{hasHalfStar && <span className="star-icon half-star"><HalfStar/></span>}
				{Array(emptyStars)
					.fill(<EmptyStar/>)
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
					<div className="element">
						<h3>{title}</h3>
					</div>
					<div className="element">
						<p className="text_color04">{text}</p>
					</div>
					<div className="element">
						<p>{price} $</p>
					</div>
					<div className="element">
						<div className="stars">{renderStars()}</div>
					</div>
				</div>
		</div>
	);
};

export default ProductCard;
