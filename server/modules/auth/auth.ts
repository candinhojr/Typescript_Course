import { Request, Response } from 'express';
import * as _ from 'lodash';
import User from '../User/service';
import authSuccess from '../../api/responses/authSuccess';
import authFail from '../../api/responses/authFail';

const UserService = new User();

class TokenRoutes {

    auth(request: Request, response: Response) {
        const credentials = {
            email: request.body.email,
            password: request.body.password
        };

        if(credentials.hasOwnProperty('email') &&  credentials.hasOwnProperty('password')) {
            UserService
                .getByEmail(credentials.email)
                .then(_.partial(authSuccess, response, credentials))
                .catch(_.partial(authFail, request, response));

        };
    };
};

export default TokenRoutes;