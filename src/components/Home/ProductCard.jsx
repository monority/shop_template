import React from 'react'


const ProductCard = ({ img, title, text, price, stars }) => {
	return (
		<>
			<div className="product">
				<div className="figure_img_base">
					<img src={img} alt="" />
					<div className="figure_caption">
						<div className="element">
							<h3>{title}</h3>
						</div>
						<div className="element">
							<p className='text_color04'>{text}</p>
							<p>{price} $</p>
						</div>
						<div className="element">
							<p>{stars}</p>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default ProductCard