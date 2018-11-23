import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export function onSuccess(response: Response, data: any) {
    response.status(HTTPStatus.OK).json({
        payload: data
    });
};