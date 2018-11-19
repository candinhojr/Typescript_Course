## Typescript Course
Projeto pessoal cujo objetivo é aprender na prática sobre TypeScript

![Cocoapods](https://img.shields.io/cocoapods/l/AFNetworking.svg)
![GitHub top language](https://img.shields.io/github/languages/top/badges/shields.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg)

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
17. e 18. Preparando o Ambiente de Testes;
19. Skelleton de Testes Unitários;
20. Escrevendo os primeiros Testes de Integração;
21. Rodando os Testes de Integração - Eles irão falhar e é isso mesmo que queremos!;
