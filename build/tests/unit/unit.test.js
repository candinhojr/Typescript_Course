"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("../../server/modules/User/service");
var helpers_1 = require("./config/helpers");
describe('Testes Unitários do Controller', function () {
    describe('Método Create', function () {
        it('Deve criar um Usuário', function () {
            var novoUsuario = {
                id: 1,
                name: 'Novo Usuario',
                email: 'novousuario@email.com',
                password: '1234'
            };
            var user = new service_1.default();
            return user.create(novoUsuario)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    describe('Método Update', function () {
        it('Deve atualizar um Usuário', function () {
        });
    });
    describe('Método GET Users', function () {
        it('Deve retornar uma lista com todos os Usuários', function () {
        });
    });
    describe('Método Delete', function () {
        it('Deve deletar um Usuário', function () {
        });
    });
});
