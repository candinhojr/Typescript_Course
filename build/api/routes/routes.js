"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (request, response) { return response.send('Hello, world!'); });
        app.route('/ola/:nome').get(function (request, response) { return response.send('Hello ${request.params.nome}'); });
    };
    return Routes;
}());
exports.default = Routes;
