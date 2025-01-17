import React, { useEffect, useState } from 'react'
import { reviews } from '../../temp/Reviews_web';
import ReviewCard from '../../components/global/ReviewCard';
import { renderStars } from '../../components/global/Stars';

const Hero = ({ text_title, title }) => {
	const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

	text_title = "You will find all the sneakers trending now, available in a limited time. We gathering our product from famous brands and independant creators."
	const currentReview = reviews[currentReviewIndex];
	const averageRating = reviews?.reduce((sum, review) => sum + review.rating, 0) / reviews?.length;

	return (
		<>
			<section id="hero">
				<div className="lyt_container">
					<div className="container_between media_responsive">
						<div className="container_column f_basis50">
							<div className="element">
								<h1 className='font_family_Geist text_center'>Trendy shoes of luxury <br /> Elevate Your Every Step <br /> Where Style Meets Comfort</h1>
							</div>
							<div className="element">
								<p>{text_title}</p>
							</div>
							<div className="element_row">
								<button className='btn btn_base'>Collections</button>
								<button className='btn btn_base_highlight'>All Sale</button>
							</div>
						</div>
						<div className="wrapper_column_centered f_basis50">
							<div className="wrapper_default_column gap2">
								<ReviewCard
									key={currentReview.id}
									id={currentReview.id}
									comment={currentReview.comment}
									name={currentReview.name}
									average={averageRating}
									review_total={reviews.length}
									stars={renderStars(averageRating)}
									title={currentReview.title}

								/>
								<div className="element_row">
									<span className='arrow_btn' onClick={() => setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length)}>
										<svg fill="currentColor" height="2rem" width="2rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
											viewBox="0 0 512 512" xmlSpace="preserve">
											<g>
												<g>
													<path d="M441.751,475.584L222.166,256L441.75,36.416c6.101-6.101,7.936-15.275,4.629-23.253C443.094,5.184,435.286,0,426.667,0
									   H320.001c-5.675,0-11.093,2.24-15.083,6.251L70.251,240.917c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667
									   c3.989,4.011,9.408,6.251,15.083,6.251h106.667c8.619,0,16.427-5.184,19.712-13.163
									   C449.687,490.858,447.852,481.685,441.751,475.584z"/>
												</g>
											</g>
										</svg>
									</span>
									<span className='arrow_btn' onClick={() => {
										if (!currentReview[0]) {
											setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
										} else {
											setCurrentReviewIndex(reviews.length - 1);
										}
									}}>
										<svg fill="currentColor" height="2rem" width="2rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M441.749,240.917L207.082,6.251C203.093,2.24,197.674,0,191.999,0H85.333c-8.619,0-16.427,5.184-19.712,13.163 c-3.307,7.979-1.472,17.152,4.629,23.253L289.834,256L70.25,475.584c-6.101,6.101-7.936,15.275-4.629,23.253 C68.906,506.816,76.714,512,85.333,512H192c5.675,0,11.093-2.24,15.083-6.251L441.75,271.082 C450.09,262.741,450.09,249.259,441.749,240.917z"></path> </g> </g> </g></svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >
		</>
	);
}

export default Hero;
