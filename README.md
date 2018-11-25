## Typescript Course
Projeto pessoal cujo objetivo é aprender na prática sobre TypeScript

![Cocoapods](https://img.shields.io/cocoapods/l/AFNetworking.svg)

## Sobre o Projeto
Projeto feito com o auxílio do **NPM**. NPM é o nome reduzido de Node Package Manager (Gerenciador de Pacotes do Node), e a NPM é duas coisas:
- Primeiro, e mais importante, é um repositório online para publicação de projetos de código aberto para o Node.js;
- Segundo, ele é um utilitário de linha de comando que interage com este repositório online, que ajuda na instalação de pacotes, gerenciamento de versão e gerenciamento de dependências.

## Dependências
A seguir as dependências do projeto.

### Dependências de Projeto
- body-parser: Para parsear os formulários da requisição. Ele analisa os corpos da requisição de entrada;
- express: Framework web a ser utilizado na aplicação;
- http: Para criarmos o servidor;
- morgan: Middleware de logger de solicitação de HTTP, responsável por gerar os logs no console da aplicação, sobre as requisições feitas à aplicação;
- pg: Módulo de conexão entre o Node e o banco de dados Postgres.
- sequelize-cli: ORM para trabalharmos com o js e com alguns banco de dados, entre eles o Postgres.

### Dependências de Desenvolvimento
- @types/body-parser;
- @types/express;
- @types/morgan;
- @types/sequelize;
- sequelize;
- ts-node: Para execução de TypeScript e REPL no node.js.

## Commits:
01. Innitial commit;
02. Update README.md;
- Iniciando o Desenvolvimento da API:
03. Criação do Projeto - NPM e Package.json a partir do comando npm init;
04. Instalação das Dependências do Projeto, e adicionando o script de 'start';
05. Instalando Bibliotecas de Terceiros - @types como Dependências de Desenvolvimento;
06. Criando o arquivo tsconfig.json e definindo suas propriedades;
    - compilerOptions, com algumas propriedades:
      - target (alvo): que no caso o arquivo ts será compilado para qual versão do js. Neste caso es5;
      - module (módulo): que neste caso será o common-js;
      - outDir (diretório de saída): no caso de para que diretório irão os códigos gerados. Neste caso eles irão para o diretório build;
      - typeRoots (raíz de tipos): definindo o @types;
      - types (tipos): adicionando o node.
    - include, para incluir todos os arquivos que o compilador vai trabalhar;
    - exclude, já que nem tudo passará pelo compilador;
    - compileOnSave com valor 'true', pois cada vez que o arquivo for salvo ele será compilado;
    - buildOnSave com valor 'true', pois cada vez que o arquivo for salvo ele vai fazer o build automaticamente, e já vai enviar os aquivos para o diretório definido.
07. Instalando o Sequelize CLI como dependência de projeto e desenvolvimento;
08. Definindo a Estrutura de Diretórios Inicial;
    - Criado os diretórios:
      - api: que conterá a classe principal que se comunicará com o web service e ficará responsável por receber as requisições e enviar as respostas ao cliente;
      - config: conterá as configurações para os diferentes tipos de ambientes de trabalho;
      - module: contetá o core da aplicação, o controller, services, interfaces. Conterá os diferentes módulos da aplicação.
09. Criando o Servidor Web;
10. Criando a Classe Principal da API;
11. Criando o Middleware Error Handler;
12. Criando as Rotas da API;
13. Criando Módulo Config - Isolando Parâmetros de Configuração da Aplicação;
14. e 15. Importando os Módulos - Integrando Componentes da Aplicação;
16. Refatorando o Servidor - Deixando mais Completo;

-Testes Autimatizados:
17. e 18. Preparando o Ambiente de Testes;
19. Skelleton de Testes Unitários;
20. Escrevendo os primeiros Testes de Integração;
21. Rodando os Testes de Integração - Eles irão falhar e é isso mesmo que queremos!;

-Continuação do Projeto:
22. Módulo Users - Refatorando as Rotas;
23. Implementando os Métodos para Atender as Rotas;
24. Rodando o Sequelize;
25. Modelando Dados com Sequelize e Sincronizando com o Banco de Dados;
26. Subindo a Aplicação - Tabela Criada no Banco de Dados;
27. Implementando o Controller;
28. Refatorar os Métodos para Atender as Rotas;
29. Refatoração e Execução dos Testes de Integração - Fazendo os Testes Passarem;
30. Usando a Biblioteca http-status;
31. Definindo os Requisitos Obrigatórios para os Testes de Integração - Parte 01;
32. Definindo os Requisitos Obrigatórios para os Testes de Integração - Parte 02;
33. Definindo os Requisitos Obrigatórios para os Testes de Integração - Parte 03;
34. Definindo os Requisitos Obrigatórios para os Testes de Integração - Parte 04;
35. e 36. Refatorando os Testes de Integração Update e Destroy;
37. Promise - Usando a Biblioteca Bluebird;
38. Implementando a Interface User;
39. Implementando a Estrutura do Service;
40. CRUD Service - Implementação do Método Create;
41. CRUD Service - Implementação do Método GetAll;
42. CRUD Service - Implementação do Método GetById;
43. CRUD Service - Implementação do Método GetByEmail;
44. CRUD Service - Implementação do Método Update;
45. CRUD Service - Implementação do Método Delete;
46. Refatorando os Testes Unitários - Testando o Método Service Create;
47. Refatorando os Testes Unitários - Testando o Método Service GetAll;
48. Refatorando os Testes Unitários - Testando o Método Service Update;
49. Refatorando os Testes Unitários - Testando o Método Service Delete;
50. Implementando os Testes Unitários GetByEmail e GetById;
51. CRUD Controller - Implementação do Método GetAll;
52. e 53. CRUD Controller - Implementação do Método CreateUser;
54. CRUD Controller - Implementação do Método GetById;
55. CRUD Controller - Implementação do Método UpdateUser;
56. CRUD Controller - Implementação do Método DeleteUser;
57. Criando Módulo Reutilizável de Success Handler;
58. Criando Módulo Reutilizável de ErrorHandler;
59. Criando um Error Handler para Operações do Banco de Dados;
60. Refatorando o Controller - Usando os Handlers Criados;

- Autenticando Usuários na Aplicação:
61. Instalando as Dependências e Definindo as Rotas do Token;
62. Implementando a Estratégia de Autenticação;
63. Criando a Função de Autentificação Bem Sucedida;
64. Criando a Função de Falha na Autenticação;
65. Implementando o Método Auth;
66. Acionando o Middleware de Autentificação;
67. Testando a Geração de Tokens;
68. Refatorando e Executando os Testes de Integração;

- Criptografia:
69. Instalando a Biblioteca bcrypt e Criptografando a Senha do Usuário;

- Cobertura de Código:
70. Code Coverage - Instalando a Biblioteca Istanbul + Nyc e Implementando e Gerando os Relatórios;