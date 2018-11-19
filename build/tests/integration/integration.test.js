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
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Deve retornar um Json com apenas um Usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + 1)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(200);
            });
        });
    });
    describe('POST /api/users/new', function () {
        it('Deve criar um novo Usuário', function (done) {
            var user = {
                nome: 'Teste'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/new')
                .send(user)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(200);
            });
        });
    });
    describe('PUT /api/users/:id/edit', function () {
        it('Deve atualizar um Usuário', function (done) {
            var user = {
                nome: 'TesteUpdate'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1 + "/edit")
                .send(user)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/users/:id', function () {
        it('Deve deletar um Usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(200);
            });
        });
    });
});
