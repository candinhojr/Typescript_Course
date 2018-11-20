import { Request, Response } from 'express';
import UserController from './controller';

let UserCtrl;

class UserRoutes {

  constructor() {
    UserCtrl = new UserController();
  }

  index(request: Request, response: Response) {
    return UserCtrl.getAll(request, response);
  }

  create(request: Request, response: Response){
    return UserCtrl.createUser(request, response);
  }

  findOne(request: Request, response: Response){
    return UserCtrl.getById(request, response);
  }

  update(request: Request, response: Response){
    return UserCtrl.updateUser(request, response);
  }

  destroy(request: Request, response: Response){
    return UserCtrl.deleteUser(request, response);
  }

}

export default UserRoutes;
