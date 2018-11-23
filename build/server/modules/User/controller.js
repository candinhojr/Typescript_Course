"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var errorHandler_1 = require("../../api/responses/errorHandler");
var successHandler_1 = require("../../api/responses/successHandler");
var dbErrorHandler_1 = require("../../config/dbErrorHandler");
var service_1 = require("./service");
var UserController = /** @class */ (function () {
    function UserController() {
        this.UserService = new service_1.default();
    }
    UserController.prototype.getAll = function (request, response) {
        this.UserService
            .getAll()
            .then(_.partial(successHandler_1.onSuccess, response))
            .catch(_.partial(errorHandler_1.onError, response, 'Erro ao buscar todos os usuários'));
    };
    ;
    UserController.prototype.createUser = function (request, response) {
        this.UserService
            .create(request.body)
            .then(_.partial(successHandler_1.onSuccess, response))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, response))
            .catch(_.partial(errorHandler_1.onError, response, 'Erro ao cadastrar novo usuário'));
    };
    ;
    UserController.prototype.getById = function (request, response) {
        var userId = parseInt(request.params.id);
        this.UserService
            .getById(userId)
            .then(_.partial(successHandler_1.onSuccess, response))
            .catch(_.partial(errorHandler_1.onError, response, 'Erro ao buscar usuário'));
    };
    ;
    UserController.prototype.updateUser = function (request, response) {
        var userId = parseInt(request.params.id);
        var props = request.body;
        this.UserService
            .update(userId, props)
            .then(_.partial(successHandler_1.onSuccess, response))
            .catch(_.partial(errorHandler_1.onError, response, 'Erro ao atualizar usuário'));
    };
    ;
    UserController.prototype.deleteUser = function (request, response) {
        var userId = parseInt(request.params.id);
        this.UserService
            .delete(userId)
            .then(_.partial(successHandler_1.onSuccess, response))
            .catch(_.partial(errorHandler_1.onError, response, 'Erro ao deletar usuário'));
    };
    ;
    return UserController;
}());
exports.default = UserController;
