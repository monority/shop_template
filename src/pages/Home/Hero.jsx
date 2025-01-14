import React, { useEffect, useState } from 'react'
import { reviews } from '../../temp/Reviews_web';
import ReviewCard from '../../components/global/ReviewCard';
import { renderStars } from '../../components/global/Stars';

const Hero = ({ text_title, title }) => {
	const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
				setFade(true);
			}, 500); w
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);
	title = "Trendy shoes of luxury"
	text_title = "You will find all the sneakers trending now, available in a limited time. We gathering our product from famous brands and independant creators."
	const currentReview = reviews[currentReviewIndex];
	const averageRating = reviews?.reduce((sum, review) => sum + review.rating, 0) / reviews?.length;

	return (
		<>
			<section id="hero">
				<div className="lyt_container">
					<div className="container_between">
						<div className="container_column f_basis30">
							<div className="element">
								<h1 className='font_family_Geist'>{title}</h1>
							</div>
							<div className="element">
								<p>{text_title}</p>
							</div>
							<div className="element_row">
								<button className='btn btn_base'>Collections</button>
								<button className='btn btn_base_highlight'>All Sale</button>
							</div>
						</div>
						<div className="wrapper_centered f_basis70">
							<div className={`review-container ${fade ? 'fade-in' : 'fade-out'}`}>
								<ReviewCard
									key={currentReview.id}
									id={currentReview.id}
									comment={currentReview.comment}
									name={currentReview.name}
									average={averageRating}
									review_total={reviews.length}
									stars={renderStars(averageRating)}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
