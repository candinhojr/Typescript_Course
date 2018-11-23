import * as HTTPStatus from 'http-status';
import { Request, Response } from 'express';
import User from './service';

class UserController {

  private UserService: User;

  constructor() {
    this.UserService = new User();
  }

  getAll(request: Request, response: Response) {
    this.UserService
    .getAll()
    .then(data => {
      response.status(HTTPStatus.OK).json({payload: data});
    })
    .catch(error => {
      response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({payload: 'Erro ao buscar os usuários'});
    })
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
