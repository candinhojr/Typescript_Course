"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (request, response) {
        response.status(200).json({
            message: 'OK'
        });
    };
    ;
    UserController.prototype.createUser = function (request, response) {
        response.status(200).json({
            message: 'OK'
        });
    };
    ;
    UserController.prototype.getById = function (request, response) {
        response.status(200).json({
            message: 'OK'
        });
    };
    ;
    UserController.prototype.updateUser = function (request, response) {
        response.status(200).json({
            message: 'OK'
        });
    };
    ;
    UserController.prototype.deleteUser = function (request, response) {
        response.status(200).json({
            message: 'OK'
        });
    };
    ;
    return UserController;
}());
exports.default = UserController;
