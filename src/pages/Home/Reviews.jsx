import React from 'react'

const Reviews = () => {
	return (
		<>
			<section id="reviews">
				<div className="container">
					<div className="container_gap">
						<div className="wrapper_layout_center">
							<div className="wrapper_cover">
								<div className="figure col">
									<img src="/img/img_trending/full_sneakers02.jpg" alt="" />
									<div className="element_caption">
										<p>On <strong>Sale</strong></p>
										<p>to 80%</p>
									</div>
								</div>
								<div className="element col">
									<img src="/img/img_trending/full_sneakers01.jpg" alt="" />
									<div className="element_caption">
										<p>On <strong>Sale</strong></p> 
										<p>to 80%</p>
									</div>
								</div>
								<div className="element col">
									<img src="/img/img_trending/full_sneakers03.jpg" alt="" />
									<div className="element_caption white">
										<p>On <strong>Sale</strong></p> 
										<p>to 80%</p>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Reviews