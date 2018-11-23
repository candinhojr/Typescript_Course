import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export function onError(response: Response, message: string, error: any) {
    console.log(`Error: ${error}`);
    response.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
};