const roleService = require('../../services/roleService');

module.exports = async function (req, res) {
	const data = await roleService.getRoleById(req.query.id);
	res.send(data);
};
