const bcrypt = require('bcrypt');
const orderModel = require('../models/orderModel');

module.exports = {
	createOrder: async function (body) {
		const data = await orderModel.createOrder(body);
		return data;
	},
	getOrder: async function (body) {
		const data = await orderModel.getOrder(body);
		return data;
	},
	getOrderById: async function (id) {
		const data = await orderModel.getOrderById(id);
		return data;
	},
	updateOrder: async function (body) {
		const data = await orderModel.updateOrder(body);
		return data;
	},
	deleteOrder: async function (id) {
		const data = await orderModel.deleteOrder(id);
		return data;
	},
};
