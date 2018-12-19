// this middleware is used to protect the routes via jwt authentication
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; //split the token from the bearer
        const decoded = jwt.verify(token, 'secret');
        req.userData = decoded;
        next();
    }
    catch(error) {
        return res.status(401).json({message: 'Auth Failed'});
    }   
};