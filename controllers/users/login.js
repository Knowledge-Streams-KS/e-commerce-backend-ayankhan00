const userService = require( '../../services/userService' )

module.exports = async function ( req, res ) {
	// const data = await userService.login( req.query.password );
	const match = userService.match(req.query.password, req.query.hash);
	match ? res.send('User Found') : res.send('User not found');
}