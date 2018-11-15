"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(error, request, response, next) {
    console.error('API error handler foi executada: ${error}');
    response.status(500).json({
        errorCode: 'ERR-001',
        message: 'Erro Interno do Servidor'
    });
}
exports.errorHandlerApi = errorHandlerApi;
