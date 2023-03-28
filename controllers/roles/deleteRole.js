const roleService = require('../../services/roleService');

module.exports = async function (req, res) {
	const data = await roleService.deleteRole(req.query.id);
	res.send(data);
};
