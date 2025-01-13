import React, { useState } from "react";

const Nav = () => {
	const navItems = ["Brands", "Promo", "Selection"];
	const [activeIndex, setActiveIndex] = useState(0);

	const displayNav = navItems.map((item, index) => (
		<li
			key={item}
			className={activeIndex === index ? "active" : "unactive"}
			onClick={() => setActiveIndex(index)}
		>
			<p>{item}</p>
		</li>
	));

	return (
		<nav className="h_100">
			<div className="container_between">
				<ul
					className="wrapper_nav padding_default"
					style={{ "--active-index": activeIndex }}
				>
					<div className="highlight padding_default"></div>
					{displayNav}
				</ul>

				<ul className="wrapper_default_row">
					<form action="search_form_hd" className="form_container">
						<div className="form_group relative">
							<input
								type="search"
								className="input_default"
								name="search_header"
								id="search_header"
							/>
							<label htmlFor="search_header" className="label_custom">
								<svg
									width="2rem"
									height="2rem"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								Search...
							</label>
						</div>
					</form>
					<li className="element">
						<svg
							className="cursor_pointer"
							width="2.8rem"
							height="2.8rem"
							viewBox="0 0 512 512"
							fill="currentColor"
						>
							{/* Icon path */}
						</svg>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
