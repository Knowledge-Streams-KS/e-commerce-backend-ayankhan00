const orderService = require('../../services/orderService');

module.exports = async function (req, res) {
	const data = await orderService.deleteOrder(req.query.id);
	res.send(data);
};
