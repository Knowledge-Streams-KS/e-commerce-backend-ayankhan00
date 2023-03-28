const orderService = require('../../services/orderService');

module.exports = async function ( req, res ) {
    const data = await orderService.createOrder( req.body );
    res.send( data );
}