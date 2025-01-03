import React from 'react'
import Trending from './Home/Trending'
import Hero from './Home/Hero'
import Reviews from './Home/Reviews'
import About from './Home/About'
import Newsletter from '../components/Footer/Newsletter'
const Home = () => {
	return (
		<>
			<div id="home">
				<Hero />
				<Trending />
				<Reviews />
				<About />
				<Newsletter />
			</div>
		</>
	)
}

export default Home