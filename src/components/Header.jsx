import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayMode from './DisplayMode';
import SubNav from './SubNav';

const Header = () => {
	const navigate = useNavigate();

	const [active, setActive] = useState(true);
	const [scroll, setScrolled] = useState(false);
	useEffect(() => {
		const headerChange = () => {
			setActive(window.scrollY < 200);
		};

		window.addEventListener("scroll", headerChange);

		return () => {
			window.removeEventListener("scroll", headerChange);
		};
	}, []);

	return (
		<>
			<header id="header" className={active ? "transparent" : "color"}>
				<div className="lyt_container w_100">
					<div className="container_between">
						<div className="element cursor_pointer" onClick={() => navigate("/")}>
							<p className='title_size01'>Sneak<strong className='text_color02'>ara</strong>.</p>
						</div>
						<div className="form_element">
							<input type="search" className='input_default' name="search_header" id="search_header" value="" />

							<label htmlFor="search_header" className='label_custom'>
								<svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>Search...
							</label>
						</div>
						<div className="element_row">
							<li className="element"></li>
							<li className="element"><svg className="cursor_pointer" width="2.8rem" height="2.8rem" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor">
								<g id="Layer_1" />
								<g id="Layer_2">
									<g>
										<path class="st0" d="M256,240.9c27.17,0,53.02-13.76,72.79-38.74c17.74-22.42,27.92-50.59,27.92-77.28    c0-27.1-10.74-52.05-30.25-70.28C307.74,37.13,282.72,27.5,256,27.5s-51.74,9.63-70.45,27.1c-19.51,18.23-30.25,43.18-30.25,70.28    c0,26.7,10.17,54.87,27.92,77.28C202.98,227.15,228.83,240.9,256,240.9z M207.4,77.99C220.16,66.07,237.42,59.5,256,59.5    s35.84,6.57,48.6,18.49c12.96,12.11,20.1,28.76,20.1,46.9c0,38.06-30.65,84.02-68.7,84.02s-68.7-45.96-68.7-84.02    C187.3,106.75,194.44,90.09,207.4,77.99z" />

										<path class="st0" d="M103.34,311.64c-10.38,20.53-13.71,45.13-10.19,75.22c3.86,32.95,8.97,61.01,15.61,85.78    c1.87,6.99,8.21,11.86,15.45,11.86H387.8c7.24,0,13.58-4.87,15.46-11.86c6.64-24.81,11.74-52.87,15.58-85.77    c3.53-30.08,0.2-54.68-10.18-75.22c-10.61-21.01-29.95-39.66-54.45-52.53c-5.38-2.82-11.04-5.4-16.81-7.65    c-4.63-1.81-9.84-1.36-14.09,1.2C302.47,265.25,279.2,271.9,256,271.9c-23.19,0-46.47-6.65-67.31-19.23    c-4.25-2.57-9.46-3.01-14.09-1.2c-5.77,2.26-11.43,4.83-16.81,7.66C133.28,271.99,113.95,290.64,103.34,311.64z M172.65,287.46    c2.18-1.14,4.42-2.24,6.7-3.28c23.96,12.92,50.29,19.72,76.64,19.72c26.35,0,52.68-6.79,76.64-19.72c2.28,1.04,4.52,2.13,6.7,3.27    c18.65,9.79,33.12,23.5,40.76,38.62c7.56,14.96,9.77,33.09,6.96,57.05c0,0,0,0.01,0,0.01c-3.06,26.15-6.91,48.98-11.73,69.36    H136.68c-4.81-20.35-8.68-43.18-11.74-69.36c-2.81-23.98-0.59-42.11,6.97-57.07C139.53,310.97,154.01,297.25,172.65,287.46z" />
									</g>
								</g>
							</svg></li>
							<li className="element">
								<svg width="2.8rem" height="2.8rem" className="cursor_pointer" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M60.53,18.71A2,2,0,0,0,59,18H48.85A15,15,0,0,0,34,5H30A15,15,0,0,0,15.15,18H5a2,2,0,0,0-1.53.71A2,2,0,0,0,3,20.35l5.33,30.3A6.51,6.51,0,0,0,14.77,56H49.23a6.51,6.51,0,0,0,6.41-5.36L61,20.35A2,2,0,0,0,60.53,18.71ZM30,9h4a11,11,0,0,1,10.81,9H19.19A11,11,0,0,1,30,9ZM51.71,49.94A2.52,2.52,0,0,1,49.23,52H14.77a2.5,2.5,0,0,1-2.47-2L7.38,22H56.62Z" fill="currentColor" /></svg>
							</li>
							<li className="element"><DisplayMode /></li>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
