import User from '../../server/modules/User/service';
import { testDouble, expect } from './config/helpers';

describe('Testes Unitários do Controller', () => {
  describe('Método Create', () => {
    it('Deve criar um Usuário', () => {
      const novoUsuario = {
        id: 1,
        name: 'Novo Usuario',
        email: 'novousuario@email.com',
        password: '1234'
      };
      const user = new User();
      return user.create(novoUsuario)
                .then(data => {
                  expect(data.dataValues).to.have.all.keys(
                    ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                  )
                });
    });
  });

  describe('Método Update', () => {
    it('Deve atualizar um Usuário', () => {

    });
  });
  describe('Método GET Users', () => {
    it('Deve retornar uma lista com todos os Usuários', () => {

    });
  });
  describe('Método Delete', () => {
    it('Deve deletar um Usuário', () => {

    });
  });
});
