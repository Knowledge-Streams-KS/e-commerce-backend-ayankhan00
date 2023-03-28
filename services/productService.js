const bcrypt = require('bcrypt');
const productModel = require('../models/productModel');

module.exports = {
	createProduct: async function (body) {
		const data = await productModel.createProduct(body);
		return data;
	},
	createProductBulk: async function (body) {
		const data = await productModel.createProductBulk(body);
		return body.products;
	},
	getProduct: async function () {
		const data = await productModel.getProduct();
		return data;
	},
	getCategory: async function () {
		const data = await productModel.getCategory();
		return data;
	},
	getProductById: async function (id) {
		const data = await productModel.getProductById(id);
		return data;
	},
	getProductByCategory: async function (category) {
		const data = await productModel.getProductByCategory(category);
		return data;
	},
	updateProduct: async function (body) {
		const data = await productModel.updateProduct(body);
		return data;
	},
	deleteProduct: async function (id) {
		const data = await productModel.deleteProduct(id);
		return data;
	},
};
