import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import SubNav from './components/SubNav'
import Hero from './pages/Hero'
const Root = () => {
	return (
		<BrowserRouter>
				<Header />
				<SubNav></SubNav>
				<Routes>
					<Route exact path="/" element={<Hero />} />
				</Routes>
		</BrowserRouter>
	)
}

export default Root;

