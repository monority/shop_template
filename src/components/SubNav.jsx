import React from 'react'
import { useLocation } from 'react-router'

const SubNav = () => {
	const location = useLocation();
	const checklocation = location.pathname === "/";
	return (
		<>

			{!checklocation &&
				<div className="lyt_container">
					<div id="sub_nav">
						<div className="container">
							<div className="menu_wrapper">
								<li className="element">Trending</li>
								<li className="element">Sneakers</li>
								<li className="element">Baseball</li>
								<li className="element">Football</li>
								<li className="element text_color_spe01">Sale</li>
							</div>
							<span className='hr_custom'></span>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default SubNav

