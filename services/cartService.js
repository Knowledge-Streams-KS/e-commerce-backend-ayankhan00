const bcrypt = require('bcrypt');
const cartModel = require('../models/cartModel');

module.exports = {
	createCart: async function (body) {
		const data = await cartModel.createCart(body);
		return data;
	},
	getCart: async function (body) {
		const data = await cartModel.getCart(body);
		return data;
	},
	getCartById: async function (id) {
		const data = await cartModel.getCartById(id);
		return data;
	},
	updateCart: async function (body) {
		const data = await cartModel.updateCart(body);
		return data;
	},
	deleteCart: async function (id) {
		const data = await cartModel.deleteCart(id);
		return data;
	},
};
