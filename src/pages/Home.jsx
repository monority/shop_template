import React from 'react'
import Trending from './Home/Trending'
import Hero from './Home/Hero'
import About from './Home/About'
import Newsletter from './Home/Newsletter'
import Branding from './Home/Branding'
const Home = () => {
	return (
		<>
			<div id="home" className='app_container'>
				<Hero />
				<Trending />
				<Branding />
				<About />
				<Newsletter />
			</div>
		</>
	)
}

export default Home