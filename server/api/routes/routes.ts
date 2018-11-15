import { Application, Request, Response } from  'express';

class Routes {

  constructor(app: Application) {
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
    app.route('/').get((request: Request, response: Response) => response.send('Hello, world!'));
    app.route('/ola/:nome').get((request: Request, response: Response) => response.send('Hello ${request.params.nome}'));
  }

}

export default Routes;
