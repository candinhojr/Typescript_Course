"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
function authFail(request, response) {
    response.sendStatus(HTTPStatus.UNAUTHORIZED);
}
exports.authFail = authFail;
;
