const orderService = require('../../services/orderService');

module.exports = async function (req, res) {
	const data = await orderService.getOrderById(req.query.id);
	res.send(data);
};
