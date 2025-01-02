import React from 'react';
import axios from 'axios';

export const ProductFetch = () => {
	const token = "f-64c500d0eaf9d3f8852a55e6616cad3f";

	axios.get('https://api.sneakersapi.dev/api/v2/products', {
		headers: {
			Authorization: token
		}
	})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
		});
};

export const ProductTrending = () => {
	axios.get('https://api.sneakersapi.dev/api/v2/products', {
		headers: {
			Authorization: token,
			trending : true,
		}
	})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
		});
}
