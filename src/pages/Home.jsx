import React from 'react'
import Trending from './Home/Trending'
import Hero from './Home/Hero'
import Reviews from './Home/Reviews'

const Home = () => {
	return (
		<>
			<div className="lyt_container">
				<div id="home">
					<Hero />
					<Trending />
				</div>
			</div>
					<Reviews/>
		</>
	)
}

export default Home