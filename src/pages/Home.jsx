import React from 'react'
import Trending from './Home/Trending'
import Hero from './Home/Hero'
import About from './Home/About'
import Newsletter from './Home/Newsletter'
import Branding from './Home/Branding'
import HorizontalScroller from '../temp/ScrollText'

const Home = () => {
	return (
		<>
			<div id="home">
				<div className="app_container">
					<Hero />
					<HorizontalScroller></HorizontalScroller>
					<Trending />
					<Branding />
				</div>
				<About />
				<Newsletter />
			</div>
		</>
	)
}

export default Home