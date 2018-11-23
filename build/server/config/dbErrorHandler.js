"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
function dbErrorHandler(response, error) {
    console.log("Um erro aconteceu: " + error);
    response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        code: 'ERR-01',
        message: 'Erro ao criar usuário'
    });
}
exports.dbErrorHandler = dbErrorHandler;
;
