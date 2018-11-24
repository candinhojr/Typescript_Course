"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jwt-simple");
var HTTPStatus = require("http-status");
var helpers_1 = require("./config/helpers");
describe('Testes de Integração', function () {
    'use strict';
    var config = require('../../server/config/env/config')();
    var model = require('../../server/models');
    var id;
    var token;
    var userTest = {
        id: 100,
        name: 'Usuário Teste',
        email: 'teste@email.com',
        password: 'teste'
    };
    var userDefault = {
        id: 1,
        name: 'Default User',
        email: 'default@email.com',
        password: 'default'
    };
    beforeEach(function (done) {
        model.User.destroy({
            where: {}
        })
            .then(function () {
            return model.User.create(userDefault);
        })
            .then(function (user) {
            model.User.create(userTest)
                .then(function () {
                token = jwt.encode({ id: user.id }, config.secret);
                done();
            });
        });
    });
    describe('POST /token', function () {
        it('Deve receber um JWT', function (done) {
            var credentials = {
                email: userDefault.email,
                password: userDefault.password
            };
            helpers_1.request(helpers_1.app)
                .post('/token')
                .send(credentials)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(response.body.token).to.equal("" + token);
                done(error);
            });
        });
        it('Não deve gerar Token', function (done) {
            var credentials = {
                email: 'email@emailqualquer.com',
                password: 'qualquer'
            };
            helpers_1.request(helpers_1.app)
                .post('/token')
                .send(credentials)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(HTTPStatus.UNAUTHORIZED);
                helpers_1.expect(response.body).to.empty;
                done(error);
            });
        });
    });
    describe('GET /api/users/all', function () {
        it('Deve retornar um Array com todos os Usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .set('Content-Type', 'application/json')
                .set('Authorization', "JWT " + token) //`Bearer ${token}`
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(response.body.payload).to.be.an('array');
                helpers_1.expect(response.body.payload[0].name).to.be.equal(userDefault.name);
                helpers_1.expect(response.body.payload[0].email).to.be.equal(userDefault.email);
                done(error);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Deve retornar um Array com apenas um Usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + userDefault.id)
                .set('Content-Type', 'application/json')
                .set('Authorization', "JWT " + token)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(response.body.payload.id).to.be.eql(userDefault.id);
                helpers_1.expect(response.body.payload).to.have.all.keys([
                    'id', 'name', 'email', 'password'
                ]);
                id = response.body.payload.id;
                done(error);
            });
        });
    });
    describe('POST /api/users/create', function () {
        it('Deve criar um novo Usuário', function (done) {
            var user = {
                id: 2,
                name: 'Usuário Teste',
                email: 'usuario@email.com',
                password: 'novouser'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/create')
                .set('Content-Type', 'application/json')
                .set('Authorization', "JWT " + token)
                .send(user)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(response.body.payload.id).to.be.eql(user.id);
                helpers_1.expect(response.body.payload.name).to.be.eql(user.name);
                helpers_1.expect(response.body.payload.email).to.be.eql(user.email);
                done(error);
            });
        });
    });
    describe('PUT /api/users/:id/update', function () {
        it('Deve atualizar um Usuário', function (done) {
            var user = {
                name: 'TesteUpdate',
                email: 'update@email.com'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + userTest.id + "/update")
                .set('Content-Type', 'application/json')
                .set('Authorization', "JWT " + token)
                .send(user)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(response.body.payload[0]).to.be.equal(1);
                done(error);
            });
        });
    });
    describe('DELETE /api/users/:id/destroy', function () {
        it('Deve deletar um Usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .delete("/api/users/" + userTest.id + "/destroy")
                .set('Content-Type', 'application/json')
                .set('Authorization', "JWT " + token)
                .end(function (error, response) {
                helpers_1.expect(response.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(response.body.payload).to.be.equal(1);
                done(error);
            });
        });
    });
});
