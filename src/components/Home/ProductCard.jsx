import React, { useState } from 'react';
const ProductCard = ({ img, title, colors, price, stars, type, link_to, description }) => {
	const [hover,SetHover] = useState(false);
	return (
		<div className="wrapper cursor_pointer" onMouseEnter={() => SetHover(true)} onMouseLeave={() => SetHover(false)}>
			<div className="element_fg bg_color03">
				<img src={img} className='image_card' alt={title} />
			</div>
			<div className="wrapper_default_column justify_between gap1">
				<div className="element_between">
					<div className="element">
						<h5>{title}</h5>
					</div>
					<div className="element">
						<h5 className='text_color02'>{type}</h5>
					</div>
				</div>
				<div className="element">

					{colors.map((color, index) => (
						<svg
							key={index}
							width="2rem"
							height="2rem"
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
						>
							<path
								fill={color} strokeWidth="0.03rem" stroke="#444444"
								d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015 12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5z"
							/>
						</svg>
					))}

				</div>
				<div className="element">
					<p className="text_color05 text_size01 break_word">{description}</p>
				</div>

				
			</div>
			{/* <div className="element_hover">
					{hover && <p>{title}</p>}
				</div> */}
		</div>
	);
};

export default ProductCard;
