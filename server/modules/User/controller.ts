import * as HTTPStatus from 'http-status';
import { Request, Response } from 'express';
import User from './service';
import { userInfo } from 'os';
import user from '../../models/user';
import { error } from 'util';

class UserController {

  private UserService: User;

  constructor() {
    this.UserService = new User();
  }

  getAll(request: Request, response: Response) {
    this.UserService
      .getAll()
      .then(data => {
        response.status(HTTPStatus.OK).json({ payload: data });
      })
      .catch(error => {
        response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao buscar todos os usuários' });
      })
  };

  createUser(request: Request, response: Response) {
    this.UserService
      .create(request.body)
      .then(data => {
        response.status(HTTPStatus.OK).json({ payload: data });
      })
      .catch(error => {
        response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao cadastrar novo usuário' });
      })
  };

  getById(request: Request, response: Response) {
    const userId = parseInt(request.params.id);
    this.UserService
      .getById(userId)
      .then(data => {
        response.status(HTTPStatus.OK).json({ payload: data });
      })
      .catch(error => {
        response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao buscar usuário' });
      })
  };

  updateUser(request: Request, response: Response) {
    const userId = parseInt(request.params.id);
    const props = request.body;
    this.UserService
      .update(userId, props)
      .then(data => {
        response.status(HTTPStatus.OK).json({ payload: data });
      })
      .catch(error => {
        response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao atualizar usuário' });
      })
  };

  deleteUser(request: Request, response: Response) {
    const userId = parseInt(request.params.id);
    this.UserService
      .delete(userId)
      .then(data => {
        response.status(HTTPStatus.OK).json({
          payload: data
        })
      })
      .catch(error => {
        response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
          payload: 'Erro ao deletar usuário'
        })
      })
  };
}

export default UserController;
