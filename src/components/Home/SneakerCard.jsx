import React from 'react'

const SneakerCard = ({ img, title, text, price, stars }) => {
	return (
		<>
			<div className="wrapper">
				<div className="figure_img_base">
					<img src={img} alt="" />
				</div>
				<div className="element">
					<h5>{title}</h5>
				</div>
				<div className="element">
					<p>{text}</p>
				</div>
				<div className="element">
					<p>{text}</p>
				</div>
				<div className="element">
					<p>{text}</p>
					<p>{price}</p>
				</div>
				<div className="element">
					<p>{stars}</p>

				</div>

			</div>
		</>
	)
}

export default SneakerCard