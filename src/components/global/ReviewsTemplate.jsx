import React from 'react'

const ReviewsTemplate = ({ message, date, name }) => {
	return (
		<>
			<div id="review">
				<div className="wrapper">
					<div className="element_row">
						<p>{name}</p>
						<p>{date}</p>
					</div>
					<div className="element">
						{message}
					</div>
				</div>
			</div>
		</>
	)
}

export default ReviewsTemplate