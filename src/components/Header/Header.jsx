import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayMode from '../DisplayMode';
import Nav from './Nav';

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
			<header className={active ? "transparent" : "color"}>
				<div className="lyt_container w_100">
					<div className="container_column_xs j_center">
					<div className="container_between h_100">

						<div className="element cursor_pointer" onClick={() => navigate("/")}>
							<p className='text_size05'>sneak<strong className='text_color02'>ara</strong>.</p>
						</div>

						<ul className="wrapper_default_row">
							<li className="element text_size01">Newsletter</li>
							<li className="element text_size01">Help</li>
							<li className="element text_size01">Order Status</li>
						</ul>
					</div>
					<Nav />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
