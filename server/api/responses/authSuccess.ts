import { Request, Response } from 'express';
import * as jwt from 'jwt-simple';
import * as HTTPStatus from 'http-status';
const config = require('../../config/env/config')();

export default function authSuccess(response: Response, credentials: any, data: any) {
    const isMatch = (credentials.password == data.password);

    if(isMatch) {
        const payload = { id: data.id };
        response.json({
            token: jwt.encode(payload, config.secret)
        });
    } else {
        response.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
};
