const bcrypt = require('bcrypt');
const cartItemModel = require('../models/cartItemModel');

module.exports = {
	createCartItem: async function (body) {
		const data = await cartItemModel.createCartItem(body);
		return data;
	},
	getCartItem: async function (body) {
		const data = await cartItemModel.getCartItem(body);
		return data;
	},
	getCartItemById: async function (id) {
		const data = await cartItemModel.getCartItemById(id);
		return data;
	},
	updateCartItem: async function (body) {
		const data = await cartItemModel.updateCartItem(body);
		return data;
	},
	deleteCartItem: async function (id) {
		const data = await cartItemModel.deleteCartItem(id);
		return data;
	},
};
