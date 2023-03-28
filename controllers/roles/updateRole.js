const roleService = require('../../services/roleService');

module.exports = async function (req, res) {
	const data = await roleService.updateRole(req.body);
	res.send(data);
};
