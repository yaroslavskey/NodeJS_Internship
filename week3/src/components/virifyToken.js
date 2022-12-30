const jwt = require('jsonwebtoken');

const jwt_decode = require('jwt-decode');

require('dotenv').config();

function verifyToken(req, res, next) {
    console.log(req.headers)
    
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1];

        const decoded = jwt_decode(bearerToken);
        req.userId = decoded.userId;

        jwt.verify(bearerToken, process.env.SECRET, (err) => {
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