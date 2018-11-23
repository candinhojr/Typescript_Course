"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var service_1 = require("./service");
var UserController = /** @class */ (function () {
    function UserController() {
        this.UserService = new service_1.default();
    }
    UserController.prototype.getAll = function (request, response) {
        this.UserService
            .getAll()
            .then(function (data) {
            response.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (error) {
            response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao buscar todos os usuários' });
        });
    };
    ;
    UserController.prototype.createUser = function (request, response) {
        this.UserService
            .create(request.body)
            .then(function (data) {
            response.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (error) {
            response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao cadastrar novo usuário' });
        });
    };
    ;
    UserController.prototype.getById = function (request, response) {
        var userId = parseInt(request.params.id);
        this.UserService
            .getById(userId)
            .then(function (data) {
            response.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (error) {
            response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao buscar usuário' });
        });
    };
    ;
    UserController.prototype.updateUser = function (request, response) {
        response.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    ;
    UserController.prototype.deleteUser = function (request, response) {
        response.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    ;
    return UserController;
}());
exports.default = UserController;
