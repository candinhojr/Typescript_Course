import { Application, Request, Response } from  'express';

class Routes {

  constructor(app: Application) {
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
    app.route('/api/users/all').get(this.router.index);
    app.route('/api/users/create').get(this.router.create);
    app.route('/api/users/:id').get(this.router.findOne);
    app.route('/api/users/:id/update').get(this.router.update);
    app.route('/api/users/:id/destroy').get(this.router.destroy);
  }

}

export default Routes;
