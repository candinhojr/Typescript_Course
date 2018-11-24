import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';

export default function authFail(request: Request, response: Response) {
    response.sendStatus(HTTPStatus.UNAUTHORIZED);
};
