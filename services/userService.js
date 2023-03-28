const bcrypt = require('bcrypt');
const { signup } = require('../controllers');
const userModel = require('../models/userModel');

module.exports = {
	createUser: async function (body) {		
        body.password = await bcrypt.hashSync(body.password, 10);
		const user = await userModel.getUserByAttribute(body);
		if (user.count != 0) {
			return 'user already exists!';
		}

		const data = await userModel.createUser(body);
		return data;
	},
	getUser: async function (body) {
		const data = await userModel.getUser(body);
		return data;
	},
	getUserById: async function (id) {
		const data = await userModel.getUserById(id);
		return data;
	},
	updateUser: async function (body) {
		const data = await userModel.updateUser(body);
		return data;
	},
	deleteUser: async function (id) {
		const data = await userModel.deleteUser(id);
		return data;
	},
};
