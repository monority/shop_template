// import React from 'react'

// const FullStar = () => (
// 	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold">
// 		<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
// 	</svg>
// );

// const EmptyStar = () => (
// 	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
// 		<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
// 	</svg>
// );

// const HalfStar = () => (
// 	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold">
// 		<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
// 		<mask id="half-mask" x="0" y="0" width="24" height="24">
// 			<rect x="12" y="0" width="12" height="24" fill="white" />
// 		</mask>
// 		<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" mask="url(#half-mask)" />
// 	</svg>
// );

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