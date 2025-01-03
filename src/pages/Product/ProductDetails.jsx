import React from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
	const { id } = useParams();

	return (
		<>
		<h1>Welcome to {id}</h1>
		</>
	)
}

export default ProductDetails