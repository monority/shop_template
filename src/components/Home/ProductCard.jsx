import React from 'react';
const ProductCard = ({ img, title, colors, price, stars, type, link_to, description }) => {
	return (
		<div className="wrapper">
			<div className="element_fg">
				<img src={img} className='image_card' alt={title} />
			</div>
			<div className="wrapper_default_column">
				<div className="element_between">
					<div className="element">
						<h3>{title}</h3>
					</div>
					<div className="element">
						<h4 className='th_text_black'>{type}</h4>
					</div>
				</div>
				<div className="element">
					<p className="text_color04">{colors}</p>
				</div>
				<div className="element">
					<p className="text_color05 break_word">{description}</p>
				</div>
				<div className="element">
					<button type="button" className='btn btn_shop' onClick={link_to}>Shop it</button>
				</div>
				<div className="element">
					<div className="stars"></div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
