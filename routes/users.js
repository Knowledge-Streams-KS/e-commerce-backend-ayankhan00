var express = require('express');
var router = express.Router();
const jwtSecret = require('../config.json');
const jwt = require('jsonwebtoken');


async function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.sendStatus(401);
	jwt.verify(token, jwtSecret.jwt.secret, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
}

// const { login,signUp } = require( '../controller/index' );
const {
	createUser,
	getUser,
	getUserById,
	updateUser,
	deleteUser,
} = require( '../controllers/index' );


// router.get('/login', login);
// router.post('/signUp', signUp);
router.post('/createUser', createUser);
router.get('/getUser', getUser);
router.get('/getUserById', getUserById);
router.put('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);

module.exports = router;
