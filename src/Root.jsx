import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import SubNav from './components/SubNav'
import Footer from './components/Footer/Footer'
const Root = () => {
	return (
		<BrowserRouter>
				<Header />
				<SubNav></SubNav>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
				<Footer></Footer>
		</BrowserRouter>
	)
}

export default Root;

