"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (request, response) {
        response.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    ;
    UserController.prototype.createUser = function (request, response) {
        response.status(HTTPStatus.OK).json({
            message: 'OK'
        });
    };
    ;
    UserController.prototype.getById = function (request, response) {
        response.status(HTTPStatus.OK).json({
            message: 'OK'
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
