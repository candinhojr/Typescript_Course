"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
function onSuccess(response, message, error) {
    console.log("Error: " + error);
    response.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
}
exports.onSuccess = onSuccess;
;
