const {models} = require( '../models/definition' )
const jwtSecret = require('../config.json');
const jwt = require('jsonwebtoken');
let refreshTokens = [];

module.exports = {
    createRole: async function ( body ) {
		const data = await models.Role.create({ ...body });
		return data;
	},
	
	login: async function ( body ) {
		let user = await models.User.findOne({
			where: {
				userName: body.userName
			},
		});
		if ( !user )
		{
			return "Invalid username password"
		}
		user = user.dataValues;
		const accessToken = generateAccessToken( user )
		const token = jwt.sign( user, jwtSecret.jwt.secret )
		refreshTokens.push( token )
		return({accessToken:accessToken,refreshTokens:token})
	},
	
};
function generateAccessToken(user) {
	return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: '3000s' });
}