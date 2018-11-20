import { Request, Response } from 'express';

class UserController {

  constructor() {}

  getAll(request: Request, response: Response) {
    response.status(200).json({
      message: 'OK'
    });
  };

  createUser(request: Request, response: Response) {
    response.status(200).json({
      message: 'OK'
    });
  };

  getById(request: Request, response: Response) {
    response.status(200).json({
      message: 'OK'
    });
  };

  updateUser(request: Request, response: Response) {
    response.status(200).json({
      message: 'OK'
    });
  };

  deleteUser(request: Request, response: Response) {
    response.status(200).json({
      message: 'OK'
    });
  };
}

export default UserController;
