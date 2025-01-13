import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import SubNav from './components/SubNav'
import Footer from './components/Footer/Footer'
import ProductDetails from './pages/Product/ProductDetails'
import AppContainer from './components/AppContainer'

const Root = () => {
	return (
		<BrowserRouter>
			<AppContainer>
				<Header />
				<SubNav></SubNav>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/product/:id" element={<ProductDetails />} />
				</Routes>
			</AppContainer>
			<Footer></Footer>
		</BrowserRouter>
	)
}

export default Root;

