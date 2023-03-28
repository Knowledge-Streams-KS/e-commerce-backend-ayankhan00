const userService = require('../../services/userService');

module.exports = async function (req, res) {
    const data = userService.signUp( req.body );
    res.send(data);
};
