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
            var usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@email.com'
            };
            var user = new service_1.default();
            return user.update(1, usuarioAtualizado).then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    describe('Método GET Users', function () {
        it('Deve retornar uma lista com todos os Usuários', function () {
            var user = new service_1.default();
            return user.getAll().then(function (data) {
                helpers_1.expect(data).to.be.an('array');
                helpers_1.expect(data[0]).to.be.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método Delete', function () {
        it('Deve deletar um Usuário', function () {
            var user = new service_1.default();
            return user.delete(1).then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
});
