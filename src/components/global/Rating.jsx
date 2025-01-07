// import React from 'react'

export const FullStar = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" fill="  #ffb821  ">
		<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
	</svg>
);

export const EmptyStar = () => (
	<svg xmlns="http://www.w3.org/2000/svg"width="1.8rem" height="1.8rem" viewBox="0 0 24 24" fill="none" stroke="#ffb821" strokeWidth="2">
		<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
	</svg>
);
export const HalfStar = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffb821" width="2rem" height="2rem">
		<defs>
			<clipPath id="half-star">
				<rect x="0" y="0" width="1rem" height="2rem" /> 
			</clipPath>
		</defs>
		<path
			d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
			clipPath="url(#half-star)"
		/>
	</svg>
);

// const Rating = ({ value }) => {
// 	const STAR_COUNT = 5;
// 	const stars = Array.from({ length: STAR_COUNT }, () => <EmptyStar />);
// 	let i;
// 	for (i = 0; i < value; i++)
// 		stars[i] = <FullStar />;
// }

// if (value % 1 != 0) //
// 	stars[i - 1] = <HalfStar />;

// export default Rating