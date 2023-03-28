var express = require( 'express' )
var router = express.Router();
const bcrypt = require( 'bcrypt' )

const { createRole, login } = require('../controllers/index');

router.post('/createRole', createRole);
router.post('/login', login);

module.exports = router;