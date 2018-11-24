"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var service_1 = require("../User/service");
var authSuccess_1 = require("../../api/responses/authSuccess");
var authFail_1 = require("../../api/responses/authFail");
var UserService = new service_1.default();
var TokenRoutes = /** @class */ (function () {
    function TokenRoutes() {
    }
    TokenRoutes.prototype.auth = function (request, response) {
        var credentials = {
            email: request.body.email,
            password: request.body.password
        };
        if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
            UserService
                .getByEmail(credentials.email)
                .then(_.partial(authSuccess_1.default, response, credentials))
                .catch(_.partial(authFail_1.default, request, response));
        }
        ;
    };
    ;
    return TokenRoutes;
}());
;
exports.default = TokenRoutes;
