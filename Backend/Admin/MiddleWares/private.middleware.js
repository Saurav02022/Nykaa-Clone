var jwt = require('jsonwebtoken');

const privateroute = (req,res,next) => {
    next()
}

module.exports = {
    privateroute
}