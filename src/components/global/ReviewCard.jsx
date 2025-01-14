import React from 'react'

const ReviewCard = ({ stars, average, name, comment, date, review_total }) => {
	return (
		<>
			<div id="review_card">
				<div className="container">
					<div className="wrapper">
						<div className="element_row">
							<span>{stars}</span>
							<p>{average} / {review_total} Reviews</p>
						</div>
						<div className="element">
							<p>{comment}</p>
						</div>
						<div className="element">
							<p>{name} {date}</p>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default ReviewCard