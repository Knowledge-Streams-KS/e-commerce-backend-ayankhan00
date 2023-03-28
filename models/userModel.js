const { models } = require('../models/definition');
const { Op } = require('sequelize');

module.exports = {
	createUser: async function (body) {
		const result = await models.User.create(body);
		return result;
	},
	getUser: async function (body) {
		const result = await models.User.findAll( {
			include: {
				model:models.Role
			},
			attributes:{exclude:['password']}
		} );
		return result;
	},
	getUserById: async function (ids) {
		const result = await models.User.findAll({
			where: { id: ids },
			include: {
				model: models.Role,
			},
			attributes: { exclude: ['password'] },
		});
		return result;
	},
	updateUser: async function (body) {
		const result = await models.User.update(
			{
				...body,
			},
			{
				where: { id: body.id },
			},
		);
		return result;
	},
	deleteUser: async function (ids) {
		const result = await models.User.destroy({
			where: { id: ids },
		});
		return 'Deleted User';
	},
	//validation
	getUserByAttribute: async function (body) {
		const result = await models.User.findAndCountAll({
			where: {
				[Op.or]: [
					{ userName: body.userName },
					{ email: body.email },
					{ phoneNumber: body.phoneNumber },
				],
			},
		});
		return result;
	},
};
