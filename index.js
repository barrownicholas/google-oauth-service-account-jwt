var auth = require('./lib/auth'),
	request = require('./lib/request-jwt');

exports.authenticate = auth.authenticate;
exports.encodeJWT = auth.encodeJWT;
exports.requestWithJWT = request.requestWithJWT;
exports.resetCache = request.resetCache;