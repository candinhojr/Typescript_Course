import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';
import { Request, Response } from 'express';
import { onError } from '../../api/responses/errorHandler';
import { onSuccess } from '../../api/responses/successHandler';
import { dbErrorHandler } from '../../config/dbErrorHandler';
import User from './service';

class UserController {

  private UserService: User;

  constructor() {
    this.UserService = new User();
  }

  getAll(request: Request, response: Response) {
    this.UserService
      .getAll()
      .then(_.partial(onSuccess, response))
      .catch(_.partial(onError, response, 'Erro ao buscar todos os usuários'))
  };

  createUser(request: Request, response: Response) {
    this.UserService
      .create(request.body)
      .then(_.partial(onSuccess, response))
      .catch(_.partial(dbErrorHandler, response))
      .catch(_.partial(onError, response, 'Erro ao cadastrar novo usuário'))
  };

  getById(request: Request, response: Response) {
    const userId = parseInt(request.params.id);
    this.UserService
      .getById(userId)
      .then(_.partial(onSuccess, response))
      .catch(_.partial(onError, response, 'Erro ao buscar usuário'))
  };

  updateUser(request: Request, response: Response) {
    const userId = parseInt(request.params.id);
    const props = request.body;
    this.UserService
      .update(userId, props)
      .then(_.partial(onSuccess, response))
      .catch(_.partial(onError, response, 'Erro ao atualizar usuário'))
  };

  deleteUser(request: Request, response: Response) {
    const userId = parseInt(request.params.id);
    this.UserService
      .delete(userId)
      .then(_.partial(onSuccess, response))
      .catch(_.partial(onError, response, 'Erro ao deletar usuário'))
  };
}

export default UserController;
