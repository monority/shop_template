import React from 'react'
const axios = require('axios').default;
export const ProductFetch = () => {
	axios.get('https://api.sneakersapi.dev/api/v2/products')
		.then(function (response) {

			console.log(response);
		})
		.catch(function (error) {

			console.log(error);
		})
		.finally(function () {

		});
}

