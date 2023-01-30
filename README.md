



  <p align="center">API rest construida com <a href="http://nodejs.org" target="_blank">Node.js</a> usando o <a href="https://github.com/nestjs/nest" target="_blank">Nestjs</a> como framework.</p>
    <p align="center">


## Descrição
Foi utilizado o Nestjs como framework para criação da APIRest. O Swagger é responsavel pela documentação e testes da Api. A autenticação e segurança dos dados e feito utilizando o JWT, e o Banco de dados é o Postgres. Tudo isso hospedado e online no servidor da [Fly.io](https://fly.io/).

A documentão pode ser acessada pelo link [https://hubtest.fly.dev/api](https://hubtest.fly.dev/api)

## Tecnologia
- Nodejs
- TypesCript
- JWT
- Prisma ORM
- Postgres
- NestJs
- Swagger

## Instalação

Para instalação faça um GitClone do projeto e execute o comando abaixo para instalar as dependencias.

```bash
$ npm install
```

## Rodando o app

Antes de Rodar o App, precisa criar o arquivo .env com as variaveis de ambiente, há uma copia de exemplo faça as modificações e rode os comandos abaixo.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Teste

Os Testes ainda não foram criados, o Nest por padrão cria todo o ambiente para criar os Testes utilizando o Jest porém não foram escritos ainda. Logo os comandos abaixo irão falhar.

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Sobre Mim

- Author - [Roseweltty B. Guida](https://linktr.ee/rbgsolucoes)

## License
This is a challenge by [Coodesh](https://coodesh.com/)
  
MyCompany is [MIT licensed](LICENSE).
