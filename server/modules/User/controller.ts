import * as HTTPStatus from 'http-status';
import { Request, Response } from 'express';

class UserController {

  constructor() {}

  getAll(request: Request, response: Response) {
    response.status(HTTPStatus.OK).json({
      message: 'OK'
    });
  };

  createUser(request: Request, response: Response) {
    response.status(HTTPStatus.OK).json({
      message: 'OK'
    });
  };

  getById(request: Request, response: Response) {
    response.status(HTTPStatus.OK).json({
      message: 'OK'
    });
  };

  updateUser(request: Request, response: Response) {
    response.status(HTTPStatus.OK).json({
      message: 'OK'
    });
  };

  deleteUser(request: Request, response: Response) {
    response.status(HTTPStatus.OK).json({
      message: 'OK'
    });
  };
}

export default UserController;
