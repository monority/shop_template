import React from 'react'
import Trending from './Home/Trending'
import Hero from './Home/Hero'
import About from './Home/About'
import Newsletter from './Home/Newsletter'
import Branding from './Home/Branding'
import { useEffect, useState } from 'react'
import { ProductFetch, ProductTrending } from '../queries/ProductFetch'
const Home = () => {
	const [data, setData] = useState([]);
	const [data_trending, setData_trending] = useState([]);
	useEffect(() => {
		ProductFetch(setData);
		ProductTrending(setData_trending)
	}, [])
	return (
		<>
			<div id="home">
				<div className="app_container">
					<Hero data_handle={data} />
					<Trending data_handle={data_trending} />
					<Branding />
				</div>
				<About />
				<Newsletter />
			</div>
		</>
	)
}

export default Home