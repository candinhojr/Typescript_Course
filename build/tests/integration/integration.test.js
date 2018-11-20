"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe('Testes de Integração', function () {
    describe('GET /api/users/all', function () {
        it('Deve retornar um Json com todos os Usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Deve retornar um Json com apenas um Usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + 1)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('POST /api/users/create', function () {
        it('Deve criar um novo Usuário', function (done) {
            var user = {
                nome: 'Teste'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/create')
                .send(user)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('PUT /api/users/:id/update', function () {
        it('Deve atualizar um Usuário', function (done) {
            var user = {
                nome: 'TesteUpdate'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1 + "/update")
                .send(user)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('DELETE /api/users/:id/destroy', function () {
        it('Deve deletar um Usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .delete("/api/users/" + 1 + "/destroy")
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(200);
                done(error);
            });
        });
    });
});
