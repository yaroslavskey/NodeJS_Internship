const jwt = require('jsonwebtoken');

require('dotenv').config();


function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1];

        req.token = bearerToken;

        jwt.verify(req.token, process.env.SECRET, (err) => {
            if (err) {
                return res.sendStatus(403);
            }
        });
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = {
    verifyToken,
};