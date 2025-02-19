import React from 'react';
import axios from "axios";

export const ProductFetch = async (setData) => {
	try {
		const token = "f-64c500d0eaf9d3f8852a55e6616cad3f";
		const { data } = await axios.get('https://api.sneakersapi.dev/api/v2/products', {
			headers: {
				Authorization: token
			},
			params: {
				category: "sneakers"
			}
		});
		setData(data.data);
		console.log(data.data)
	} catch (error) {
		console.error("Error fetching products:", error);
	}
};

export const ProductTrending = ({ data }) => {
	const token = "f-64c500d0eaf9d3f8852a55e6616cad3f";

	axios.get('https://api.sneakersapi.dev/api/v2/products', {
		headers: {
			Authorization: token
		},
		params: {
			trending: true
		}
	})
		.then(function (response) {
			console.log(response.data.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};


export const ProductById = async (setData, id) => {
	try {
		const token = "f-64c500d0eaf9d3f8852a55e6616cad3f";
		const { data } = await axios.get(`https://api.sneakersapi.dev/api/v2/products/${id}`, {
			headers: {
				Authorization: token
			},

		});
		setData(data);
		console.log(data)
	} catch (error) {
		console.error("Error fetching products:", error);
	}
};