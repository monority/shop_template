import React from 'react'
import Trending from './Home/Trending'
import Hero from './Home/Hero'
import Reviews from './Home/Reviews'
import About from './Home/About'
const Home = () => {
	return (
		<>
			<div className="lyt_container">
				<div id="home">
					<Hero />
					<Trending />
				</div>
			</div>
			<Reviews />
			<About />
		</>
	)
}

export default Home