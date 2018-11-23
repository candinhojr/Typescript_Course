import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export function dbErrorHandler(response: Response, error: any) {
    console.log(`Um erro aconteceu: ${error}`);
    response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        code: 'ERR-01',
        message: 'Erro ao criar usuário'
    });
};