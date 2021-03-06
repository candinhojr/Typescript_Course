"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jwt-simple");
var HTTPStatus = require("http-status");
var bcrypt = require("bcrypt");
var config = require('../../config/env/config')();
function authSuccess(response, credentials, data) {
    var isMatch = bcrypt.compareSync(credentials.password, data.password);
    if (isMatch) {
        var payload = { id: data.id };
        response.json({
            token: jwt.encode(payload, config.secret)
        });
    }
    else {
        response.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
}
exports.default = authSuccess;
;
