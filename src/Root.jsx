import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import SubNav from './components/SubNav'
const Root = () => {
	return (
		<BrowserRouter>
				<Header />
				<SubNav></SubNav>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
		</BrowserRouter>
	)
}

export default Root;

