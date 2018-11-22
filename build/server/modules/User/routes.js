"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var UserCtrl;
var UserRoutes = (function () {
    function UserRoutes() {
        UserCtrl = new controller_1.default();
    }
    UserRoutes.prototype.index = function (request, response) {
        return UserCtrl.getAll(request, response);
    };
    UserRoutes.prototype.create = function (request, response) {
        return UserCtrl.createUser(request, response);
    };
    UserRoutes.prototype.findOne = function (request, response) {
        return UserCtrl.getById(request, response);
    };
    UserRoutes.prototype.update = function (request, response) {
        return UserCtrl.updateUser(request, response);
    };
    UserRoutes.prototype.destroy = function (request, response) {
        return UserCtrl.deleteUser(request, response);
    };
    return UserRoutes;
}());
exports.default = UserRoutes;
