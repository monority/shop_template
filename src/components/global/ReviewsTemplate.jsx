import React from 'react'


const ReviewsTemplate = ({ message, rating, date, name }) => {
	return (
		<>
			<div id="review">
				<div className="wrapper">
					<div className="element_between">
						<p>{name}</p>
						<p>{rating}</p>
						<p className='text_color04'>{date}</p>
					</div>
					<div className="element">
						{message}
					</div>
					<hr />
				</div>
			</div>
		</>
	)
}

export default ReviewsTemplate